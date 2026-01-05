const crypto = require('crypto');

// ROT13 Implementation
function rot13(str) {
    return str.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode(
            (c <= "Z" ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26
        );
    });
}

// Base64URL encoding/decoding
function base64UrlEncode(buffer) {
    return buffer.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

function base64UrlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    while (str.length % 4) {
        str += '=';
    }
    return Buffer.from(str, 'base64');
}

// Obfuscate: XOR (Header.Payload) with Signature -> ROT13
function obfuscateToken(jwtToken) {
    const parts = jwtToken.split('.');
    if (parts.length !== 3) return jwtToken; // Not a valid JWT, return as is

    const headerPayload = parts[0] + '.' + parts[1];
    const signature = parts[2];

    const hpBuffer = Buffer.from(headerPayload, 'utf-8'); // Base64URL strings are ASCII safe
    const sigBuffer = Buffer.from(signature, 'utf-8');

    const xoredBuffer = Buffer.alloc(hpBuffer.length);

    for (let i = 0; i < hpBuffer.length; i++) {
        xoredBuffer[i] = hpBuffer[i] ^ sigBuffer[i % sigBuffer.length];
    }

    const xoredBase64 = base64UrlEncode(xoredBuffer);
    const obfuscatedBody = rot13(xoredBase64);

    // Return Format: ObfuscatedBody.Signature
    return `${obfuscatedBody}.${signature}`;
}

// Deobfuscate: ROT13 -> XOR with Signature -> Header.Payload
function deobfuscateToken(obfuscatedToken) {
    const parts = obfuscatedToken.split('.');
    if (parts.length !== 2) return obfuscatedToken; // Assume it's already a normal JWT if not 2 parts? Or error?

    const obfuscatedBody = parts[0];
    const signature = parts[1];

    // 1. ROT13 (Inverse is ROT13)
    const xoredBase64 = rot13(obfuscatedBody);

    // 2. Base64 Decode
    const xoredBuffer = base64UrlDecode(xoredBase64);
    const sigBuffer = Buffer.from(signature, 'utf-8');

    // 3. XOR Back
    const hpBuffer = Buffer.alloc(xoredBuffer.length);
    for (let i = 0; i < xoredBuffer.length; i++) {
        hpBuffer[i] = xoredBuffer[i] ^ sigBuffer[i % sigBuffer.length];
    }

    const headerPayload = hpBuffer.toString('utf-8');

    // Reconstruct JWT
    return `${headerPayload}.${signature}`;
}

module.exports = {
    obfuscateToken,
    deobfuscateToken
};

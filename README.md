<p align="center">
  <img src="https://dummyimage.com/1300x260/0a0a0a/00eaff&text=MyLayak+Kiosk+Prototype" width="100%">
</p>

<h1 align="center">MyLayak — Zero-Trust Eligibility Kiosk </h1>

<h3 align="center">
MyLayak is a zero-trust eligibility platform that lets citizens instantly discover government services they already qualify for — without exposing personal data.

</h3>

<p align="center">
  <img src="https://img.shields.io/badge/build-passing-00c853?style=flat-square">
  <img src="https://img.shields.io/badge/demo-prototype-blue?style=flat-square">
  <img src="https://img.shields.io/badge/license-MIT-yellow?style=flat-square">
</p>

---

# 📌 Overview
**MYLAYAK** is a **Proactive Eligibility Wallet** that fixes Malaysia’s biggest subsidy problem — eligibility doesn’t equal receiving. Today, millions of citizens qualify for support but miss out due to forms, scattered systems, and scams that make the process confusing and unsafe.

MyLayak changes this by combining **MyDigital ID steganographic QR verification**, **Soulbound Eligibility Tokens (SETs)**, and a **zero-trust security architecture** to instantly verify eligibility **without exposing any personal data**.

It consolidates verified eligibility attributes such as **B40**, **student**, **senior citizen**, and **STR-related status** into a single secure wallet, then automatically matches citizens to services they already qualify for.

**No applications. No repeated uploads. No fraud.**

**MyLayak makes benefits find the people — securely, instantly, and for everyone.**


**MYLAYAK makes benefits find the people securely, instantly, and for everyone.**

---
# ✨ Demo Video
https://drive.google.com/file/d/1uo1dbaDWmi28-qSwRvH4JtfDcJp1P7rc/view?usp=sharing

---

# ✨ Prototype Link
[https://drive.google.com/file/d/1QCTIazM7nm3ti-F-MBouihEPaNxLo0eW/view?usp=sharing](https://www.figma.com/make/CgL8fGinH1rMeIDd1dthQV/Government-Digital-Service-Kiosk?node-id=0-1&p=f)

---

# ✨ Backend Link
[[https://drive.google.com/file/d/1QCTIazM7nm3ti-F-MBouihEPaNxLo0eW/view?usp=sharing](https://www.figma.com/make/CgL8fGinH1rMeIDd1dthQV/Government-Digital-Service-Kiosk?node-id=0-1&p=f)](https://github.com/saladbkp/My-layak-backend)

---

# ✨ Security Architecture Visualization Link
https://mylayak-security-architecture.tiiny.site

---

# ✨ Key Features

## • **Form-Free, Instant Authentication**
Authenticate via **MyKad tap/insert** or **MyDigital ID QR scan** — no forms, no document uploads.

---

## • **Eligibility Wallet (SET-Based)**
Displays government-issued, non-sensitive eligibility tokens such as:
- Student  
- B40 Household  
- Senior Citizen  
- Regional Eligibility  

---

## • **Automatic Service Matching**
MyLayak automatically identifies services the citizen is **pre-qualified** for using verified SETs.

---

## • **One-Click Activation with Clear Consent**
Only eligibility attributes are shared.  
**No IC number, income, documents, or personal info** are ever displayed or transmitted.

---

## • **Complete Kiosk Flow Prototype**
Welcome → Authentication → Eligibility Wallet → Services → Consent → Activation → Success → Auto Logout

---

# 🔐 Security Model (Simplified)
MyLayak follows a **strict Zero-Trust architecture**, where the kiosk is always treated as untrusted.

## • **Identity–Eligibility Separation**
- MyDigital ID handles all identity & biometric verification  
- MyLayak receives only a **hashed ID** and **non-sensitive eligibility tokens**

## • **Soulbound Eligibility Tokens (SETs)**
- Issued & signed by a government Oracle  
- Non-transferable and cannot be forged  

## • **Secure Communication**
Assumes modern encrypted channels suitable for future-safe deployments.

## • **No Data Stored on Kiosk**
No caching, no tokens, no personal information.  
Steganographic markers help prevent spoofed QR or fake kiosk screens.

**Result:** Even if the kiosk is compromised, identity remains protected and eligibility cannot be altered.

---

# 🚀 Running the Prototype

Install dependencies:


npm i

Start development server:
npm run dev

---
# Backend

## 1 TOKEN -> SET with JWT TOKEN with key 
```
const SECRET_KEY = "my-layak-secret-key-very-secure";

const payload = {
	sub: hashedID,
	attributes: {
		category: category,
		is_student: citizenData.employment_status === 'Student',
		has_dependents: citizenData.dependents > 0
	},
	nonce: crypto.randomBytes(16).toString('hex'),
	iat: Date.now(),
	exp: Date.now() + (1000 * 60 * 60) // 1 hour validity
};
```
SPECIAL obfuscation + deobfuscate
XOR first 2 with sign + ROT13 
so eyJhbGciOiJIUzI1NiIs -> ZGpFYPjZRyx1WUkxNOy5

DOUBLE LAYER -> KEY STORED IN BACKEND + OBFUSCATE JWT PATTERN

## 2 QR STEGA SCANNER  
```
const payload = qr.data;
visible payload: DIGITALID:SESSION=ABC123

const ts = bitsToInt(bits.slice(0, 32));
const tag = bitsToInt(bits.slice(32));
SECRET = CHANGE_ME_SECRET
const expected = hmac32(SECRET, `${payload}|${ts}`);

TAG MUST == expected
```
WHAT THE DIFF? HOW TO STEGA INSIDE?

QR CODE have its own Error-Correction Area
design to be fault tolerant 
- You **intentionally choose specific QR squares** that:
    - Do **not affect normal scanning**
    - Are normally ignored by standard scanners
- You use these squares to:
    - Represent **0s and 1s**
    - Encode a **timestamp + cryptographic fingerprint**

- 👀 **Humans cannot see the difference**
- 📱 **Normal QR scanners do not detect it**

attack even generate the qr code by the visible payload also cannot regenerate it 
because the scanner is different 
<img width="591" height="577" alt="image" src="https://github.com/user-attachments/assets/d99f1448-9a4d-4509-bdd0-cbae58e2400d" />


now the issue is ik upload image confirm can work, but idk scan this can work or not (idh cam)

## 3 QUANTUM 
currently using bb84
注意!!! 
不是"量子比 AES/RSA/ECC 更安全"
而是"量子让 --> 偷密钥 这件事可被发现、可被拒绝、不可事后回溯"

QKD 不依赖"算不出来"
QKD 依赖"不能被观察而不留下痕迹"

Explanation of record now, decrypt later 
attackers can store encrypted traffic today and decrypt it years later when stronger computers (especially quantum computers) become available.
QKD prevents this by making the encryption keys unavailable forever, even in the future.

THIS IS NORMAL CASE 
```
PS C:\Users\Asus\Desktop\MyLayak> node .\test\bb84.js
=== BB84 QKD Simulation (JS) ===
N qubits sent:               2000
Eve enabled:                false
Eve intercept rate:         1
Sifted bits (basis match):  992
Sampled for QBER check:     198
Sample errors:              0
QBER (error rate):          0.00%
QBER threshold:             11.00%
Detected eavesdropping?:    NO (OK)
Raw key bits left:          794
Final key (PA, hex):        a6caeb34829596c40b0f7a2bc965ed4a
```

THIS IS ATTACKER CASE
```
PS C:\Users\Asus\Desktop\MyLayak> node .\test\bb84.js
=== BB84 QKD Simulation (JS) ===
N qubits sent:               2000
Eve enabled:                true
Eve intercept rate:         1
Eve intercepted count:      2000
Sifted bits (basis match):  977
Sampled for QBER check:     195
Sample errors:              51
QBER (error rate):          26.15%
QBER threshold:             11.00%
Detected eavesdropping?:    YES (ABORT)
Raw key bits left:          782
Final key (PA, hex):        e880ed40b1c8591fe2083eb65d4b81e9
```

---
# 📘 License
MIT License.

  

import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { ReadingIdScreen } from './components/ReadingIdScreen';
import { VerificationScreen } from './components/VerificationScreen';
import { IdentityVerifiedScreen } from './components/IdentityVerifiedScreen';
import { EligibilityWallet } from './components/EligibilityWallet';
import { StudentDetailScreen } from './components/StudentDetailScreen';
import { B40DetailScreen } from './components/B40DetailScreen';
import { RegionalDetailScreen } from './components/RegionalDetailScreen';
import { EligibleServices } from './components/EligibleServices';
import { StudentGrantCategory } from './components/StudentGrantCategory';
import { FlySiswaDetail } from './components/FlySiswaDetail';
import { PTPTNDetail } from './components/PTPTNDetail';
import { JPADetail } from './components/JPADetail';
import { STRDetail } from './components/STRDetail';
import { ServiceDetails } from './components/ServiceDetails';
import { ConfirmationScreen } from './components/ConfirmationScreen';
import { ProcessingScreen } from './components/ProcessingScreen';
import { SuccessScreen } from './components/SuccessScreen';
import { CheckApplicationInput } from './components/CheckApplicationInput';
import { ApplicationDetails } from './components/ApplicationDetails';
import { HealthcareCoverage } from './components/HealthcareCoverage';
import { PublicHealthcareDetail } from './components/PublicHealthcareDetail';
import { UniversityGPADetail } from './components/UniversityGPADetail';
import { MadaniDetail } from './components/MadaniDetail';
import { MySalamDetail } from './components/MySalamDetail';
import { PeKaB40Detail } from './components/PeKaB40Detail';
import { ApplicationHistoryDashboard } from './components/ApplicationHistoryDashboard';
import { SocialServicesHistory } from './components/SocialServicesHistory';
import { TransportationHistory } from './components/TransportationHistory';
import { EducationHistory } from './components/EducationHistory';
import { HealthcareCoverageStatus } from './components/HealthcareCoverageStatus';
import { TransportSubsidy } from './components/TransportSubsidy';
import { SeniorCareProgram } from './components/SeniorCareProgram';
import { DigitalAccessProgram } from './components/DigitalAccessProgram';
import { FoodAssistance } from './components/FoodAssistance';
import { MyKadConcessionDetail } from './components/MyKadConcessionDetail';
import { KTMStudentPassDetail } from './components/KTMStudentPassDetail';
import { StudentDeviceDetail } from './components/StudentDeviceDetail';
import { JENDELAWiFiDetail } from './components/JENDELAWiFiDetail';
import { AgroMadaniDetail } from './components/AgroMadaniDetail';
import { MenuRahmahDetail } from './components/MenuRahmahDetail';
import backgroundImage from 'figma:asset/df2f6be404215777d6a9ff32bce3eee7cf6f3052.png';

export type Screen = 
  | 'welcome'
  | 'reading-id'
  | 'verification'
  | 'identity-verified'
  | 'eligibility-wallet'
  | 'student-detail'
  | 'b40-detail'
  | 'regional-detail'
  | 'eligible-services'
  | 'student-grant-category'
  | 'flysiswa-detail'
  | 'ptptn-detail'
  | 'jpa-detail'
  | 'str-detail'
  | 'service-details'
  | 'confirmation'
  | 'processing'
  | 'success'
  | 'check-application-input'
  | 'application-details'
  | 'healthcare-coverage'
  | 'public-healthcare-detail'
  | 'university-gpa-detail'
  | 'madani-detail'
  | 'mysalam-detail'
  | 'peka-b40-detail'
  | 'application-history-dashboard'
  | 'social-services-history'
  | 'transportation-history'
  | 'education-history'
  | 'healthcare-coverage-status'
  | 'transport-subsidy'
  | 'senior-care-program'
  | 'digital-access-program'
  | 'food-assistance'
  | 'mykad-concession-detail'
  | 'ktm-student-pass-detail'
  | 'student-device-detail'
  | 'jendela-wifi-detail'
  | 'agro-madani-detail'
  | 'menu-rahmah-detail';

export type LoginMethod = 'mykad' | 'qr' | null;

export interface Service {
  id: string;
  title: string;
  icon: string;
  description: string;
  eligibilityRequirements: string[];
  category: string;
}

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [loginMethod, setLoginMethod] = useState<LoginMethod>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [referenceId, setReferenceId] = useState<string>('');

  const handleLogout = () => {
    setCurrentScreen('welcome');
    setLoginMethod(null);
    setSelectedService(null);
  };

  const handleLoginStart = (method: LoginMethod) => {
    setLoginMethod(method);
    setCurrentScreen('reading-id');
  };

  const handleScreenChange = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    setCurrentScreen('service-details');
  };

  const handleStudentGrantServiceSelect = (serviceId: string) => {
    const screenMap: Record<string, Screen> = {
      'flysiswa': 'flysiswa-detail',
      'ptptn': 'ptptn-detail',
      'jpa': 'jpa-detail',
      'str': 'str-detail',
    };
    const targetScreen = screenMap[serviceId];
    if (targetScreen) {
      handleScreenChange(targetScreen);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen onLoginStart={handleLoginStart} />;
      case 'reading-id':
        return <ReadingIdScreen 
          loginMethod={loginMethod} 
          onComplete={() => {
            // Skip verification screen for QR code since it already shows "Authentic ID Verified"
            if (loginMethod === 'qr') {
              handleScreenChange('identity-verified');
            } else {
              handleScreenChange('verification');
            }
          }} 
        />;
      case 'verification':
        return <VerificationScreen 
          onComplete={() => handleScreenChange('identity-verified')} 
        />;
      case 'identity-verified':
        return <IdentityVerifiedScreen 
          onContinue={() => handleScreenChange('eligibility-wallet')} 
        />;
      case 'eligibility-wallet':
        return <EligibilityWallet 
          onViewServices={() => handleScreenChange('eligible-services')}
          onLogout={handleLogout}
          onCardClick={(cardId: string) => {
            if (cardId === 'student') handleScreenChange('student-detail');
            else if (cardId === 'b40') handleScreenChange('b40-detail');
            else if (cardId === 'regional') handleScreenChange('regional-detail');
          }}
          onCheckApplication={() => handleScreenChange('application-history-dashboard')}
        />;
      case 'student-detail':
        return <StudentDetailScreen 
          onBack={() => handleScreenChange('eligibility-wallet')} 
        />;
      case 'b40-detail':
        return <B40DetailScreen 
          onBack={() => handleScreenChange('eligibility-wallet')} 
        />;
      case 'regional-detail':
        return <RegionalDetailScreen 
          onBack={() => handleScreenChange('eligibility-wallet')} 
        />;
      case 'eligible-services':
        return <EligibleServices 
          onServiceSelect={(service) => {
            // Route to specific service category pages
            if (service.id === 'student-grant') {
              handleScreenChange('student-grant-category');
            } else if (service.id === 'healthcare-benefit') {
              handleScreenChange('healthcare-coverage');
            } else if (service.id === 'transport-subsidy') {
              handleScreenChange('transport-subsidy');
            } else if (service.id === 'senior-care') {
              handleScreenChange('senior-care-program');
            } else if (service.id === 'digital-access') {
              handleScreenChange('digital-access-program');
            } else if (service.id === 'food-assistance') {
              handleScreenChange('food-assistance');
            } else {
              handleServiceSelect(service);
            }
          }}
          onBack={() => handleScreenChange('eligibility-wallet')}
        />;
      case 'student-grant-category':
        return <StudentGrantCategory 
          onServiceSelect={handleStudentGrantServiceSelect}
          onBack={() => handleScreenChange('eligible-services')}
        />;
      case 'flysiswa-detail':
        return <FlySiswaDetail 
          onBack={() => handleScreenChange('student-grant-category')}
        />;
      case 'ptptn-detail':
        return <PTPTNDetail 
          onBack={() => handleScreenChange('student-grant-category')}
        />;
      case 'jpa-detail':
        return <JPADetail 
          onBack={() => handleScreenChange('student-grant-category')}
        />;
      case 'str-detail':
        return <STRDetail 
          onBack={() => handleScreenChange('student-grant-category')}
        />;
      case 'service-details':
        return <ServiceDetails 
          service={selectedService}
          onAccept={() => handleScreenChange('confirmation')}
          onBack={() => handleScreenChange('eligible-services')}
        />;
      case 'confirmation':
        return <ConfirmationScreen 
          service={selectedService}
          onConfirm={() => handleScreenChange('processing')}
          onBack={() => handleScreenChange('service-details')}
        />;
      case 'processing':
        return <ProcessingScreen 
          onComplete={() => handleScreenChange('success')} 
        />;
      case 'success':
        return <SuccessScreen 
          service={selectedService}
          onFinish={() => handleScreenChange('eligibility-wallet')}
          onCheckOtherServices={() => handleScreenChange('eligible-services')}
        />;
      case 'check-application-input':
        return <CheckApplicationInput 
          onSubmit={(id: string) => {
            setReferenceId(id);
            handleScreenChange('application-details');
          }}
          onBack={() => handleScreenChange('eligibility-wallet')}
        />;
      case 'application-details':
        return <ApplicationDetails 
          referenceId={referenceId}
          onBack={() => handleScreenChange('eligibility-wallet')}
          onCheckAnother={() => handleScreenChange('check-application-input')}
        />;
      case 'healthcare-coverage':
        return <HealthcareCoverage 
          onBack={() => handleScreenChange('eligible-services')}
          onDetailClick={(detailType) => {
            const detailScreenMap: Record<string, Screen> = {
              'public-healthcare': 'public-healthcare-detail',
              'university-gpa': 'university-gpa-detail',
              'madani': 'madani-detail',
              'mysalam': 'mysalam-detail',
              'peka-b40': 'peka-b40-detail',
            };
            const targetScreen = detailScreenMap[detailType];
            if (targetScreen) {
              handleScreenChange(targetScreen);
            }
          }}
        />;
      case 'public-healthcare-detail':
        return <PublicHealthcareDetail 
          onBack={() => handleScreenChange('healthcare-coverage')}
        />;
      case 'university-gpa-detail':
        return <UniversityGPADetail 
          onBack={() => handleScreenChange('healthcare-coverage')}
        />;
      case 'madani-detail':
        return <MadaniDetail 
          onBack={() => handleScreenChange('healthcare-coverage')}
        />;
      case 'mysalam-detail':
        return <MySalamDetail 
          onBack={() => handleScreenChange('healthcare-coverage')}
        />;
      case 'peka-b40-detail':
        return <PeKaB40Detail 
          onBack={() => handleScreenChange('healthcare-coverage')}
        />;
      case 'application-history-dashboard':
        return <ApplicationHistoryDashboard 
          onBack={() => handleScreenChange('eligibility-wallet')}
          onCategoryClick={(category: string) => {
            if (category === 'social-services') {
              handleScreenChange('social-services-history');
            } else if (category === 'transportation') {
              handleScreenChange('transportation-history');
            } else if (category === 'education') {
              handleScreenChange('education-history');
            } else if (category === 'healthcare') {
              handleScreenChange('healthcare-coverage-status');
            }
          }}
        />;
      case 'social-services-history':
        return <SocialServicesHistory 
          onBack={() => handleScreenChange('application-history-dashboard')}
        />;
      case 'transportation-history':
        return <TransportationHistory 
          onBack={() => handleScreenChange('application-history-dashboard')}
          onViewServices={() => handleScreenChange('eligible-services')}
        />;
      case 'education-history':
        return <EducationHistory 
          onBack={() => handleScreenChange('application-history-dashboard')}
        />;
      case 'healthcare-coverage-status':
        return <HealthcareCoverageStatus 
          onBack={() => handleScreenChange('application-history-dashboard')}
        />;
      case 'transport-subsidy':
        return <TransportSubsidy 
          onBack={() => handleScreenChange('eligible-services')}
          onDetailClick={(detailType) => {
            const detailScreenMap: Record<string, Screen> = {
              'mykad-concession': 'mykad-concession-detail',
              'ktm-student-pass': 'ktm-student-pass-detail',
            };
            const targetScreen = detailScreenMap[detailType];
            if (targetScreen) {
              handleScreenChange(targetScreen);
            }
          }}
        />;
      case 'senior-care-program':
        return <SeniorCareProgram 
          onBack={() => handleScreenChange('eligible-services')}
        />;
      case 'digital-access-program':
        return <DigitalAccessProgram 
          onBack={() => handleScreenChange('eligible-services')}
          onDetailClick={(detailType) => {
            const detailScreenMap: Record<string, Screen> = {
              'student-device': 'student-device-detail',
              'jendela-wifi': 'jendela-wifi-detail',
            };
            const targetScreen = detailScreenMap[detailType];
            if (targetScreen) {
              handleScreenChange(targetScreen);
            }
          }}
        />;
      case 'food-assistance':
        return <FoodAssistance 
          onBack={() => handleScreenChange('eligible-services')}
          onDetailClick={(detailType) => {
            const detailScreenMap: Record<string, Screen> = {
              'agro-madani': 'agro-madani-detail',
              'menu-rahmah': 'menu-rahmah-detail',
            };
            const targetScreen = detailScreenMap[detailType];
            if (targetScreen) {
              handleScreenChange(targetScreen);
            }
          }}
        />;
      case 'mykad-concession-detail':
        return <MyKadConcessionDetail 
          onBack={() => handleScreenChange('transport-subsidy')}
        />;
      case 'ktm-student-pass-detail':
        return <KTMStudentPassDetail 
          onBack={() => handleScreenChange('transport-subsidy')}
        />;
      case 'student-device-detail':
        return <StudentDeviceDetail 
          onBack={() => handleScreenChange('digital-access-program')}
        />;
      case 'jendela-wifi-detail':
        return <JENDELAWiFiDetail 
          onBack={() => handleScreenChange('digital-access-program')}
        />;
      case 'agro-madani-detail':
        return <AgroMadaniDetail 
          onBack={() => handleScreenChange('food-assistance')}
        />;
      case 'menu-rahmah-detail':
        return <MenuRahmahDetail 
          onBack={() => handleScreenChange('food-assistance')}
        />;
      default:
        return <WelcomeScreen onLoginStart={handleLoginStart} />;
    }
  };

  return (
    <div className="min-h-screen w-screen overflow-hidden relative">
      {/* Background image with overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src={backgroundImage} 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {renderScreen()}
      </div>
    </div>
  );
}
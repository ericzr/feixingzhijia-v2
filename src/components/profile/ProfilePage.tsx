import React from "react";
import { ProfileCandidateView } from "./ProfileCandidateView";
import { ProfilePilotView } from "./ProfilePilotView";

interface ProfilePageProps {
  droneType?: any;
  licenseType?: any;
  onSwitchType?: () => void;
  onMyMistakesClick: () => void;
  onMyFavoritesClick: () => void;
  onCollectionsClick?: () => void;
  onFlightApplicationClick?: () => void;
  onAirspaceClick?: () => void;
  onClimateQueryClick?: () => void;
  onResumeClick?: () => void;
  onInvitationCodeClick: () => void;
  onCaacBindingClick: () => void;
  onSettingsClick?: () => void;
  role: 'candidate' | 'pilot';
  onRoleToggle: () => void;
  isLoggedIn?: boolean;
  onLoginClick?: () => void;
}

export default function ProfilePage({ 
  role, 
  onRoleToggle,
  onMyMistakesClick,
  onMyFavoritesClick,
  onCollectionsClick,
  onFlightApplicationClick,
  onAirspaceClick,
  onClimateQueryClick,
  onResumeClick,
  onInvitationCodeClick,
  onCaacBindingClick,
  onSettingsClick,
  isLoggedIn = false,
  onLoginClick
}: ProfilePageProps) {
  
  if (role === 'pilot') {
    return (
      <div className="min-h-full">
        <ProfilePilotView 
          onSwitchRole={onRoleToggle} 
          onMyFavoritesClick={onMyFavoritesClick}
          onCollectionsClick={onCollectionsClick}
          onFlightApplicationClick={onFlightApplicationClick}
          onAirspaceClick={onAirspaceClick}
          onClimateQueryClick={onClimateQueryClick}
          onResumeClick={onResumeClick}
          onInvitationCodeClick={onInvitationCodeClick}
          onCaacBindingClick={onCaacBindingClick}
          onSettingsClick={onSettingsClick}
          isLoggedIn={isLoggedIn}
          onLoginClick={onLoginClick}
        />
      </div>
    );
  }

  return (
    <div className="min-h-full">
      <ProfileCandidateView 
        onSwitchRole={onRoleToggle} 
        onMyMistakesClick={onMyMistakesClick}
        onMyFavoritesClick={onMyFavoritesClick}
        onCollectionsClick={onCollectionsClick}
        onInvitationCodeClick={onInvitationCodeClick}
        onCaacBindingClick={onCaacBindingClick}
        onSettingsClick={onSettingsClick}
        isLoggedIn={isLoggedIn}
        onLoginClick={onLoginClick}
      />
    </div>
  );
}
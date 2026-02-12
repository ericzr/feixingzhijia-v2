import React from "react";
import { ProfileCandidateView } from "./ProfileCandidateView";
import { ProfilePilotView } from "./ProfilePilotView";

interface ProfilePageProps {
  droneType?: any;
  licenseType?: any;
  onSwitchType?: () => void;
  onMyMistakesClick: () => void;
  onMyFavoritesClick: () => void;
  onInvitationCodeClick: () => void;
  onCaacBindingClick: () => void;
  role: 'candidate' | 'pilot';
  onRoleToggle: () => void;
}

export default function ProfilePage({ 
  role, 
  onRoleToggle,
  onMyMistakesClick,
  onMyFavoritesClick,
  onInvitationCodeClick,
  onCaacBindingClick
}: ProfilePageProps) {
  
  if (role === 'pilot') {
    return (
      <div className="flex-1 bg-[#fefbf4] relative overflow-y-auto scrollbar-hide pb-[80px]">
        <ProfilePilotView 
          onSwitchRole={onRoleToggle} 
          onMyFavoritesClick={onMyFavoritesClick} 
          onInvitationCodeClick={onInvitationCodeClick}
          onCaacBindingClick={onCaacBindingClick}
        />
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#fefbf4] relative overflow-y-auto scrollbar-hide pb-[80px]">
      <ProfileCandidateView 
        onSwitchRole={onRoleToggle} 
        onMyMistakesClick={onMyMistakesClick}
        onMyFavoritesClick={onMyFavoritesClick}
        onInvitationCodeClick={onInvitationCodeClick}
        onCaacBindingClick={onCaacBindingClick}
      />
    </div>
  );
}
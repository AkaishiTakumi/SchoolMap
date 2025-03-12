import React from "react";

interface NameSwitchProps {
    showSubName: boolean;
    setShowSubName: (show: boolean) => void;
}

const NameSwitch: React.FC<NameSwitchProps> = ({ showSubName, setShowSubName }) => {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={showSubName}
                    onChange={(e) => setShowSubName(e.target.checked)}
                />
                会場情報を見る
            </label>
        </div>
    );
};

export default NameSwitch;

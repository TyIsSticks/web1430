let missionList;

function setupAddMissionControls() {
    const addMissionButton = document.getElementById("add-mission-btn");
    const missionInput = document.getElementById("mission-input");

    if (!addMissionButton || !missionInput) {
        return;
    }

    const submitMission = () => {
        const missionText = missionInput.value.trim();

        if (!missionText) {
            return;
        }

        addMission(missionText);
        missionInput.value = "";
        missionInput.focus();
    };

    addMissionButton.addEventListener("click", submitMission);
    missionInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            submitMission();
        }
    });
}

function getMissionItems() {
    return missionList ? Array.from(missionList.children).map((item) => item.textContent) : [];
}

function initializeDashboard() {
    const missionContainer = document.getElementById("mission-container");

    if (!missionContainer) {
        console.error("Mission container not found.");
        return;
    }

    const existingHeading = missionContainer.querySelector("h1");
    if (existingHeading) {
        existingHeading.remove();
    }

    const existingList = missionContainer.querySelector("ul");
    if (existingList) {
        existingList.remove();
    }

    const heading = document.createElement("h1");
    heading.textContent = "Secret Agent Dashboard";

    missionList = document.createElement("ul");

    const defaultMissions = [
        "Decode encrypted message",
        "Gather intel",
        "Disable security system",
    ];

    defaultMissions.forEach((missionText) => {
        const missionItem = document.createElement("li");
        missionItem.textContent = missionText;
        missionList.appendChild(missionItem);
    });

    missionContainer.prepend(heading);
    missionContainer.appendChild(missionList);

    console.log("Dashboard initialized:", getMissionItems());
}

function addMission(text) {
    if (!missionList) {
        console.error("Mission list is not initialized.");
        return;
    }

    const missionItem = document.createElement("li");
    missionItem.textContent = text;
    missionList.appendChild(missionItem);

    console.log(`Added mission: ${text}`, getMissionItems());
}

function updateMission(index, newText) {
    if (!missionList) {
        console.error("Mission list is not initialized.");
        return;
    }

    const missionItem = missionList.children[index];

    if (!missionItem) {
        console.error(`No mission found at index ${index}.`);
        return;
    }

    missionItem.textContent = newText;
    console.log(`Updated mission at index ${index}: ${newText}`, getMissionItems());
}

function deleteMission(index) {
    if (!missionList) {
        console.error("Mission list is not initialized.");
        return;
    }

    const missionItem = missionList.children[index];

    if (!missionItem) {
        console.error(`No mission found at index ${index}.`);
        return;
    }

    missionItem.remove();
    console.log(`Deleted mission at index ${index}`, getMissionItems());
}

function insertAfter(newText, referenceIndex) {
    if (!missionList) {
        console.error("Mission list is not initialized.");
        return;
    }

    const referenceItem = missionList.children[referenceIndex];

    if (!referenceItem) {
        console.error(`No mission found at reference index ${referenceIndex}.`);
        return;
    }

    const missionItem = document.createElement("li");
    missionItem.textContent = newText;
    referenceItem.insertAdjacentElement("afterend", missionItem); // insertAdjacentElement adds the new item after the reference item

    console.log(
        `Inserted mission after index ${referenceIndex}: ${newText}`,
        getMissionItems()
    );
}

initializeDashboard();
setupAddMissionControls();
addMission("Secure extraction route");
updateMission(1, "Gather high-priority intel");
deleteMission(0);
insertAfter("Plant tracking device", 1);

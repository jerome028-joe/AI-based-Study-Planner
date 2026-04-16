window.addEventListener(
    "error",
    function (e) {
        if (
            e.error instanceof DOMException &&
            e.error.name === "DataCloneError" &&
            e.message.includes("PerformanceServerTiming")
        ) {
            e.stopImmediatePropagation();
            e.preventDefault();
        }
    },
    true
);

// Example Root Content
document.getElementById("root").innerHTML = `
    <h1 style="text-align:center; margin-top:50px;">
        Welcome to Emergent App
    </h1>
`;

// Load External Script
const emergentScript = document.createElement("script");
emergentScript.src = "https://assets.emergent.sh/scripts/emergent-main.js";
document.head.appendChild(emergentScript);
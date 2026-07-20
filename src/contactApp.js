const form = document.getElementById("contact-form");

form?.addEventListener("submit", event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const data = new FormData(form);
  const subject = `EDUCORE website enquiry – ${data.get("name")}`;
  const body = [
    "EDUCORE WEBSITE ENQUIRY",
    "",
    `Name: ${data.get("name")}`,
    `Email: ${data.get("email")}`,
    `Phone: ${data.get("phone") || "Not provided"}`,
    `Company: ${data.get("company") || "Not provided"}`,
    "",
    "Message:",
    data.get("message")
  ].join("\n");

  window.location.href = `mailto:info@educore.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.getElementById("contact-status")?.classList.remove("hidden");
});

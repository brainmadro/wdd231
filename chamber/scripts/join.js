const $modal = document.querySelector("dialog");
const $cards = document.querySelectorAll("div[data-membership-level]");
const $timestamp = document.querySelector("#application_timestamp");
const contentHTML = {
  gold: `<div class="modal-content">
    <div class="header">
      <button id="closeModal">❌</button>
      <h2>Gold Membership</h2>
    </div>
    <ul>
      <li>30% discount on all events, trade shows, and training programs.</li>
      <li>Featured advertising on the homepage twice per quarter.</li>
      <li>Opportunity to present a talk or workshop at a chamber-organized event.</li>
      <li>Access to exclusive Gold Member events, with networking and personalized advisory sessions.</li>
      <li>Opportunity to be highlighted in the "Spotlight" section of the homepage.</li>
      <li>Three free training courses per year.</li>
    </ul>
  </div>`,
  silver: `<div class="modal-content">
    <button id="closeModal">❌</button>
    <h2>Silver Membership</h2>
    <ul>
      <li>20% discount on all events and trade shows organized by the chamber.</li>
      <li>Exclusive access to monthly online seminars and webinars.</li>
      <li>Featured advertising on the chamber's website once per quarter.</li>
      <li>Opportunity to be highlighted in the "Spotlight" section of the homepage.</li>
      <li>One free annual training course.</li>
    </ul>
  </div>`,
  bronze: `<div class="modal-content">
    <button id="closeModal">❌</button>
    <h2>Bronze Membership</h2>
    <ul>
      <li>10% discount on events and trade shows organized by the chamber.</li>
      <li>Priority access to leadership and professional development training programs.</li>
      <li>Inclusion in the chamber's member directory on the website.</li>
      <li>One free quarterly post in the chamber's newsletter.</li>
    </ul>
	</div>`,
  np: `<div class="modal-content">
    <div class="header">
      <button id="closeModal">❌</button>
      <h2>NP Membership (Non-Profit Organizations)</h2>
    </div>
    <ul>
      <li>Free access to all events for non-profit organizations.</li>
      <li>Access to an online library of business and management resources.</li>
      <li>Discounts on training programs specifically for the non-profit sector.</li>
      <li>Networking opportunities with other organizations to foster collaboration.</li>
    </ul>
  </div>`
};

$timestamp.value = Date.now()

$cards.forEach((element) => {
  element.addEventListener("click", (event) => {
    const level = event.target.dataset.membershipLevel;
    $modal.innerHTML = contentHTML[level];
    $modal.showModal()
    closeModal.addEventListener("click", () => {
      $modal.close();
    });
  });
});

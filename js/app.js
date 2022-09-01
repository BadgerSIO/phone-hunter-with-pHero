const loadData = async (searchText, loadAmount) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data, loadAmount);
};
const displayPhone = (phones, loadAmount) => {
  const cards = document.getElementById("cards");
  cards.innerHTML = ``;
  const loadBtn = document.getElementById("loadBtn");
  if (loadAmount && phones.length > 10) {
    loadBtn.classList.remove("hidden");
    phones = phones.slice(0, 10);
  } else {
    loadBtn.classList.add("hidden");
  }
  //display 10 phones
  //display no phones found
  const notFound = document.getElementById("notFound");
  if (phones.length === 0) {
    notFound.classList.remove("hidden");
  } else {
    notFound.classList.add("hidden");
  }
  searchSpinner.classList.add("hidden");
  phones.forEach((phone) => {
    const card = document.createElement("div");
    card.innerHTML = `
      <div class="w-full bg-white rounded-lg shadow-md h-full">
                <a href="#">
                  <img
                    class="p-8 rounded-t-lg"
                    src="${phone.image}"
                    alt="product image"
                  />
                </a>
                <div class="px-5 pb-5">
                  <a href="#">
                    <h5
                      class="text-lg font-semibold tracking-tight text-gray-900"
                    >
                     ${phone.phone_name}
                    </h5>
                  </a>
                  <div class="flex items-center mt-2.5 mb-5">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>First star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Second star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Third star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fourth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>Fifth star</title>
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      ></path>
                    </svg>
                    <span
                      class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ml-3"
                      >5.0</span
                    >
                  </div>
                  <div class="flex justify-between">
                    <span class="text-2xl xl:text-3xl font-bold text-gray-900">$599</span>
                    <button onclick="showModal('${phone.slug}')" class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                       Details
                        </button>
                  </div>
                </div>
              </div>
      `;
    cards.appendChild(card);
  });
};
//show modal
const defaultModal = document.getElementById("defaultModal");
const showModal = async (id) => {
  const url = `https://openapi.programming-hero.com/api/phone/${id}`;
  const res = await fetch(url);
  const data = await res.json();
  displayFromSlug(data.data);
  defaultModal.classList.remove("hidden");
  defaultModal.classList.add("flex");
};
const displayFromSlug = (data) => {
  const modalBody = document.getElementById("modalBody");
  modalBody.innerHTML = ``;
  modalBody.innerHTML = `
   <!-- Modal header -->
            <div class="flex justify-between items-start p-4 rounded-t border-b ">
                <h3 id="modalTitle" class="text-xl font-semibold text-gray-900 ">
                    ${data.name}
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" onclick="closeModal()">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div id="phoneDes" class="p:3 md:p-6 md:flex">
              <div class="imges hidden md:block">
                <img src="${data.image}" alt="">
              </div>
                <div class="flex-grow-1 pt-3 md:pt-0 pl-3 md:pl-5">
                  <p class="font-normal text-sm pb-2"><span class="font-semibold">Brand:</span> &nbsp; ${data.brand}</p>
                  <p class="font-normal text-sm pb-2"><span class="font-semibold">Release Date:</span>&nbsp; ${data.releaseDate}</p>
                  <p class="font-normal text-sm pb-2"><span class="font-semibold">Chipset:</span>&nbsp;${data.mainFeatures.chipSet}</p>
                  <p class="font-normal text-sm pb-2"><span class="font-semibold">Display Size:</span>&nbsp;${data.mainFeatures.displaySize}</p>
                  <p class="font-normal text-sm pb-2"><span class="font-semibold">Storage:</span> &nbsp;${data.mainFeatures.storage}</p>
                  <p class="font-normal text-sm pb-2"><span class="font-semibold">Ram & Rom:</span> &nbsp;${data.mainFeatures.memory}</p>
                </div>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 ">
               
                <button onclick="closeModal()" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 ">Close</button>
            </div>
  `;
};
//close modal
function closeModal() {
  defaultModal.classList.remove("flex");
  defaultModal.classList.add("hidden");
}
//common function
function load(loadAmount) {
  searchSpinner.classList.remove("hidden");
  const searchPhones = document.getElementById("searchPhones");
  const searchText = searchPhones.value;
  loadData(searchText, loadAmount);
}
// click on search button
const searchSpinner = document.getElementById("searchSpinner");
document.getElementById("searchBtn").addEventListener("click", function () {
  load(10);
});

//load more button
const loadmore = () => {
  load();
};

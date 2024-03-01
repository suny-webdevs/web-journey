const loadPhones = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json()
    const phones = data.data
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.querySelector('#phones-container')
    phoneContainer.textContent = ''

    const showBtnContainer = document.querySelector('#showBtn-container')
    
    // console.log(phones.length, phones)
    if(phones.length > 12 && !isShowAll) {
        showBtnContainer.classList.remove('hidden')
    } 
    else (
        showBtnContainer.classList.add('hidden')
    )

    if(!isShowAll) {
        phones = phones.slice(0, 12)
    }

    phones.forEach(phone => {
        // console.log(phone)
        const div = document.createElement('div')
        div.innerHTML = `
            <figure class="py-10"><img src="${phone.image}" alt="${phone.phone_name}" title="${phone.phone_name}" /></figure>
            <div class="px-5 pb-10 space-y-5">
                <h2 class="text-2xl text-primary font-semibold text-center">${phone.phone_name}</h2>
                <p class="text-center">There are many variations of passages of available, but the majority have suffered</p>
                <h3 class="text-center text-xl text-black font-bold">$999</h3>
                <div class="card-actions justify-center">
                    <button onclick="handleShowDetails('${phone.slug}')" class="btn btn-primary text-white px-10">Show Details</button>
                </div>
            </div>
        `
        div.classList = `card bg-white shadow-xl`
        phoneContainer.appendChild(div)
    });
    toggleLoading(false)
}

const handleSearch = (isShowAll) => {
    toggleLoading(true)
    const searchInput = document.querySelector('#search-input')
    const searchText = searchInput.value
    // searchInput.value = ''
    loadPhones(searchText, isShowAll)
}
 
const toggleLoading = (isLoading) => {
    const loadingSpinner = document.querySelector('#loading-spinner')
    if(isLoading) {
        loadingSpinner.classList.remove('hidden')
    }
    else {
        loadingSpinner.classList.add('hidden')
    }
}

const handleShowAll = () => {
    handleSearch(true)
}

const handleShowDetails = async (id) => {
    // console.log('show details clicked', id)
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    const data = await res.json()
    const phone = data.data
    showPhoneDetails(phone)
}

const showPhoneDetails = (phone) => {
    console.log(phone)
    const modalBox = document.querySelector('#modal-box')
    modalBox.innerHTML = `
        <figure class="w-full bg-white py-5 rounded-lg flex justify-center">
            <img src="${phone.image}" alt="${phone.name}" title="${phone.name}">
        </figure>
        <h3 class="font-bold text-2xl mt-5">${phone.name}</h3>
        <p class="py-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
        <p class="py-4"><span class="font-semibold">Storage: </span><span>${phone?.mainFeatures?.storage || 'No data'}</span></p>
        <p class="py-4"><span class="font-semibold">Display size: </span><span>${phone?.mainFeatures?.displaySize || 'No data'}</span></p>
        <p class="py-4"><span class="font-semibold">Chipset: </span><span>${phone?.mainFeatures?.chipSet || 'No data'}</span></p>
        <p class="py-4"><span class="font-semibold">Memory: </span><span>${phone?.mainFeatures?.memory || 'No data'}</span></p>
        <p class="py-4"><span class="font-semibold">Slug: </span><span>${phone.slug}</span></p>
        <p class="py-4"><span class="font-semibold">Release date: </span><span>${phone.releaseDate}</span></p>
        <p class="py-4"><span class="font-semibold">Brand: </span><span>${phone.brand}</span></p>
        <p class="py-4"><span class="font-semibold">GPS: </span><span>${phone?.others?.GPS || 'No data'}</span></p>
    `
    show_details_modal.showModal()
}

// loadPhones()
import { countryItem, countryList } from './refs'
import Notiflix from 'notiflix';

function apendMarkup(data) {
    
    if (data.length > 10) {
        Notiflix.Notify.warning("Too many varitants! Enter more specific name!")
        clearMarkup()
        return
    }

    if (data.length > 1 && data.length <= 10) {
        listMarkup(data)
    } else {
        fullCardMarkup(data)
    }   

}

function listMarkup(data) {
    clearMarkup()
    const markup = data.map(country => {
       return `<li class='flex'><img src="${country.flags.svg}" alt="${country.capital}" width = "25" height = "15"/><h2>${country.name.official}</h2></li>`
    }).join('');
     countryList.innerHTML = markup
}

function fullCardMarkup(data) {
    clearMarkup()

    data.map(({ name, capital, population, languages, flags }) => {
        const getLanguages = Object.values(languages).join(' , ')
         countryItem.innerHTML = `<div class='flex'>
  <img src="${flags.svg}" alt="${capital}" width = "25" height = "15" />
  <h2>${name.official}</h2></div>
  <p>Capital : ${capital}</p>
  <p>Population : ${population}</p>
  <p>Languages : ${getLanguages}</p>
</div>`
    })
}

function clearMarkup() {
     countryItem.innerHTML = ''
     countryList.innerHTML = ''    
}

export {apendMarkup , clearMarkup}
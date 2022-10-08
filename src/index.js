import './css/styles.css';
import Notiflix from 'notiflix';
import { debounce } from "debounce";
import { formInputRef } from './refs'
import { apendMarkup, clearMarkup } from './markup';
import { fetchCountries } from "./fetchCountries";
    
const DEBOUNCE_DELAY = 300;

formInputRef.addEventListener('input',debounce(handleInput, DEBOUNCE_DELAY))

function handleInput(event) {
    const inputValue = event.target.value.trim()
    
    if (inputValue === '') {
        clearMarkup()
        return
    }
    fetchCountries(inputValue).then(apendMarkup).catch(error => {
       clearMarkup()
        Notiflix.Notify.failure('There is no such country!')
    }
    )
}






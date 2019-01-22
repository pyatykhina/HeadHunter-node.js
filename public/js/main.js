function isMatching(full, chunk) {
    if (full.toLowerCase().indexOf(chunk.toLowerCase()) >= 0) {
        return true;
    }

    return false;
}

function search(){
    var Items = document.getElementsByClassName('list__item');
    var Input = document.querySelector('.search__input');
    
    Input.addEventListener('keyup', () => {
        if (Input.value != '') {
            for (var item of Items) {
                item.style.display = 'none';

                if (item.firstElementChild.nextElementSibling.innerHTML != '') {
                    if (isMatching(item.firstElementChild.nextElementSibling.innerHTML, Input.value)) {
                        item.style.display = 'flex';
                    }
                }
            }
        } else {
            for (var item of Items) {
                item.style.display = 'flex';
            }
        }
    })

}

search();
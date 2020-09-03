'use strict';

        const boxes = document.querySelector('body > div#boxes');
        const inputText = document.querySelector('input.js-input');
        const createBtn = document.querySelector('button[data-action="create"]');
        const clearBtn = document.querySelector('button[data-action="clear"]')

        createBtn.addEventListener('click', () => createBoxes(parseInt(inputText.value)));
        clearBtn.addEventListener('click', () => destroyBoxes());

        const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
        const randomByte = () => randomNumber(0, 255)
        const randomCssRgba = () => `rgb(${[randomByte(), randomByte(), randomByte()].join(',')})`

        const createBoxes = (amount) => {
            for (let i = 0; i < amount; i++) {
                const div = document.createElement('div');
                div.style.backgroundColor = randomCssRgba();
                div.style.width = `${30 + (i * 10)}px`
                div.style.height = div.style.width;
                boxes.appendChild(div);
            }
        }

        const destroyBoxes = () => {
            boxes.innerHTML = '';
        }
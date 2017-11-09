import { Field } from './field';

export class Game {
    constructor() {
        this.field; //поле
    }
    start() {
        let width = 8;
        let height = 3;
        let card_back = 2;
        let back_btns = document.getElementsByClassName('choose_back');
        let size_btns = document.getElementsByClassName('choose_size');

        /*for (let item of back_btns) { //задаем рубашку
            item.onclick = () => {
                card_back = item.value;
                this.set_cardBack(card_back); //задаем рубашку
            }
        }*/
        document.querySelector('.back_article').onclick = (event) =>{
            card_back = event.target.value;
            this.set_cardBack(card_back);
        }

        for (let item of size_btns) { //задаем размер поля
            item.onclick = () => {
                width = item.value * 2;
                this.create_field(width, height, card_back);
            }
        }
        this.create_field(width, height, card_back);

        document.getElementById('playAgain').onclick = () => {
            this.create_field(width, height, card_back);
            this.show_startPage();
        }
        this.show_startPage();
    }
    reset_gameData() {
        document.querySelector('.game-field').innerHTML = '';
        document.getElementById('clicks').innerHTML = 0;
    }
    show_startPage() {
        document.location = '#startPage';
    }

    create_field(width, height, card_back) {
        this.field = new Field(width, height);
        let row = '<div class="row">';
        let field_area = document.querySelector('.game-field');
        this.reset_gameData(); //обнуляем все данные
        this.set_cardBack(card_back); //задаем рубашку
        for (let i = 0; i < width; i++) //создаем строку поля
            row += '<div class="card move"></div>';
        row += '</div>';
        for (let i = 0; i < height; i++) //создаем ячейки поля
            field_area.innerHTML += row;
        for (let item of document.getElementsByClassName('card')) // зададим рандомность для постоянного движения карт
            item.style.animationDelay = Math.random() * (3 - 0) + 's';
        this.field.fill_cells(document.getElementsByClassName('card')); //заполним карты значениями
    }

    set_cardBack(val) {
        document.querySelector('.game-field').style.setProperty('--card-back', 'url("../media/img/back/card_back_' + val + '.gif")');
    }
}

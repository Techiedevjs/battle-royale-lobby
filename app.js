let playerDetail = {
    name: 'zHunter',
    level: 50,
}
document.querySelectorAll('.level').forEach((elem) => {
    elem.innerHTML = playerDetail.level
})
document.querySelectorAll('.name').forEach((elem) => {
    elem.innerHTML = playerDetail.name
})
document.querySelectorAll('.mic').forEach((elem) => {
    elem.addEventListener('click', () =>  elem.classList.toggle('active'))
})
const gameModes = [
    {
        id: 1,
        name: 'team deathmatch',
        participants: '5 x 5',
        imageUrl: 'media/team-deathmatch.png'
    },
    {
        id: 2,
        name: 'free for all',
        participants: '10',
        imageUrl: 'media/free-for-all.png'
    },
    {
        id: 3,
        name: 'vip escort',
        participants: '3 x 3',
        imageUrl: 'media/vip-escort.png'
    },
    {
        id: 4,
        name: 'battle royale',
        participants: '20',
        imageUrl: 'media/battle-royale.png'
    },
]
let selectedMode;
const selectMode = (id) => {
    let selected = document.querySelector(`.mode-${id}`)
    selectedMode = id;
    selected.classList.add('selected');
    let siblings = Array.from(selected.parentNode.children).filter((elem) => elem !== selected);
    siblings.map((elem) => elem.classList.remove('selected'))
}

const pushGameModes = (modes) => {
    document.querySelector('.game-modes').innerHTML = '';
    modes.map((mode) => {
        document.querySelector('.game-modes').innerHTML += `
        <section class='${`mode-${mode.id}`} game-mode' onclick="selectMode(${mode.id})">
            <span class="border"></span>
            <span class="opac"></span>
            <img src=${mode.imageUrl} alt="">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M0.818184 16.5C0.586366 16.5 0.391912 16.41 0.234821 16.23C0.07773 16.05 -0.000542623 15.8275 2.83108e-06 15.5625V13.875C2.83108e-06 13.3438 0.119457 12.8553 0.358366 12.4097C0.597275 11.9641 0.914184 11.6244 1.30909 11.3906C2.15455 10.9063 3.01364 10.5428 3.88637 10.3003C4.75909 10.0578 5.64546 9.93688 6.54546 9.93751C7.44546 9.93751 8.33182 10.0588 9.20455 10.3013C10.0773 10.5438 10.9364 10.9069 11.7818 11.3906C12.1773 11.625 12.4945 11.965 12.7334 12.4106C12.9723 12.8563 13.0915 13.3444 13.0909 13.875V15.5625C13.0909 15.8281 13.0124 16.0509 12.8553 16.2309C12.6982 16.4109 12.504 16.5006 12.2727 16.5H0.818184ZM14.3386 16.5C14.4614 16.3906 14.5568 16.2537 14.625 16.0894C14.6932 15.925 14.7273 15.7416 14.7273 15.5391V13.6875C14.7273 13 14.5604 12.3397 14.2265 11.7066C13.8927 11.0734 13.4187 10.5306 12.8045 10.0781C13.5 10.1719 14.1545 10.3322 14.7682 10.5591C15.3818 10.7859 15.9545 11.0631 16.4864 11.3906C16.9773 11.7031 17.3523 12.0506 17.6114 12.4331C17.8705 12.8156 18 13.2338 18 13.6875V15.5625C18 15.8281 17.9217 16.0509 17.7652 16.2309C17.6086 16.4109 17.4142 16.5006 17.1818 16.5H14.3386ZM6.54546 9.00001C5.64546 9.00001 4.875 8.63282 4.23409 7.89845C3.59318 7.16408 3.27273 6.28127 3.27273 5.25002C3.27273 4.21877 3.59318 3.33596 4.23409 2.60158C4.875 1.86721 5.64546 1.50002 6.54546 1.50002C7.44546 1.50002 8.21591 1.86721 8.85682 2.60158C9.49773 3.33596 9.81818 4.21877 9.81818 5.25002C9.81818 6.28127 9.49773 7.16408 8.85682 7.89845C8.21591 8.63282 7.44546 9.00001 6.54546 9.00001ZM14.7273 5.25002C14.7273 6.28127 14.4068 7.16408 13.7659 7.89845C13.125 8.63282 12.3545 9.00001 11.4545 9.00001C11.3045 9.00001 11.1136 8.98032 10.8818 8.94095C10.65 8.90157 10.4591 8.85876 10.3091 8.81251C10.6773 8.31251 10.9604 7.75782 11.1584 7.14845C11.3564 6.53908 11.4551 5.90627 11.4545 5.25002C11.4545 4.59377 11.3558 3.96096 11.1584 3.35158C10.9609 2.74221 10.6778 2.18752 10.3091 1.68752C10.5 1.6094 10.6909 1.55846 10.8818 1.53471C11.0727 1.51096 11.2636 1.4994 11.4545 1.50002C12.3545 1.50002 13.125 1.86721 13.7659 2.60158C14.4068 3.33596 14.7273 4.21877 14.7273 5.25002Z" fill="white"/>
            </svg>
            <p>${mode.participants}</p>
            </div>
            <h3>${mode.name}</h3>
        </section>
        `
    })
}
const matchMaking = () => {
    const possibleStates = ['success', 'failed']
    const randomIndex = Math.floor(Math.random() * possibleStates.length);
    return possibleStates[randomIndex]
}
const matchMakingFailed = () => {
    document.querySelector('.vid-cont').classList.add('hide');
    document.querySelector('.ready').classList.add('hide');
    document.querySelector('.unable').classList.remove('hide');
}
const readyToPlay = () => {
    document.querySelector('.vid-cont').classList.remove('hide');
    document.querySelector('.ready').classList.add('hide');
    document.querySelector('.unable').classList.add('hide');
    setTimeout(() => {
        let status = matchMaking();
        if (status === 'failed'){
            matchMakingFailed()
        } else {
            alert('SUCCESS')
            cancelMatchmaking()
        }
    }, 3000);
}
const cancelMatchmaking = () => {
    document.querySelector('.vid-cont').classList.add('hide');
    document.querySelector('.ready').classList.remove('hide');
    document.querySelector('.unable').classList.add('hide')
}
pushGameModes(gameModes)


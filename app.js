const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/24.jpg'
    },
    {
        name: 'Joan Doe',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/24.jpg'
    },
    {
        name: 'George Watts',
        age: 28,
        gender: 'male',
        lookingfor: 'male',
        location: 'Springfilled OH',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },
    {
        name: 'Donny Potts',
        age: 33,
        gender: 'male',
        lookingfor: 'male',
        location: 'Atlantic City NJ',
        image: 'https://randomuser.me/api/portraits/men/88.jpg'
    }
];

const profiles = profileIterator(data);

document.getElementById('next').addEventListener('click', nextProfile);
function nextProfile() {
    const currentProfile = profiles.next().value;
    if(currentProfile !== undefined) {
    document.getElementById('profileDisplay').innerHTML= `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
        </ul>
    `;
    document.getElementById('imageDisplay').innerHTML = `<img src="${currentProfile.image}">`;
}else {
    window.location.reload();
}
}

function profileIterator(profiles){
    let nextIndex = 0;
    return {
        next: function(){
            return nextIndex < profiles.length ? 
            { value: profiles[nextIndex++], done: false } : 
            { done: true}
        }
    };
}
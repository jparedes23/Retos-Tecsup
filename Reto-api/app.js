// const aplicacion = document.querySelector(".information-container");

// const url ='https://api.github.com/users';

// fetch(url)
// .then(res => res.json())
// .then(data => {
//     data.forEach(user => {
//         console.log(user.login)
//         const p = document.createElement('p')
//         p.innerHTML= user.login

//     });
//     // console.log(data)
// })
// .catch(err => console.log(err))


const btnGetUser= document.querySelector('#btn');
const container = document.querySelector('#container')
const section = document.querySelector('#section')

const urlGitHub= 'https://api.github.com/users/jparedes23';

btnGetUser.onclick = async function(){

    const respuesta = await fetch(urlGitHub)

    const data = await respuesta.json();

    showe(data);
}


function showe (data){
  
    container.innerHTML = `<div class="image-container">
    <img width="100" src="${data.avatar_url}"
    }.png" alt="" />
    <h4>${data.name}</h4>
  </div>
  <div class="user-date-container">
            <h2>Creado</h2>
            <p>${data.created_at}</p>
          </div>
          <div class="card-informacion">
                    <div>
                        <h5>Repos</h5>
                        <h2>${data.public_repos}</h2>
                    </div>
                    <div>
                        <h5>Followes</h5>
                        <h2>${data.followers}</h2>
                    </div>

                    <div>
                        <h5>Following</h5>
                        <h2>${data.following}</h2>
                    </div>
                    <!-- Info de ubi, twitter, link, username -->
                    <div class="info-container">
                        <div>
                            <p>
                                <img width="15" src="./images/pin.png" alt="" />&nbsp;San
                                Francisco
                            </p>
                            <p>
                                <img width="15" src="./images/link.png" alt="" />&nbsp;https://github.blog
                            </p>
                        </div>
                        <div>
                            <p>
                                <img width="15" src="./images/twitter.png" alt="" />&nbsp;Not
                                avible
                            </p>

                            <p>
                                <img width="15" src="./images/hotel.png" alt="" />&nbsp;@Jparedes23
                            </p>
                        </div>
                    </div>
                </div>
        `
}

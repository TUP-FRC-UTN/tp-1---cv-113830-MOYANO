let educacion = [
  {
    titulo: "TECNICATURA EN PROGRAMACION",
    institucion: "Universidad Tecnologica Nacional",
    incio: "2022",
    fin: "Actualidad",
    logo: "https://frro.cvg.utn.edu.ar/theme/image.php/snap/theme/1652373334/img/logo",
  },
  {
    titulo: "DESARROLLADOR FULL STACK .NET",
    institucion: "Instituto Superior Politécnico Cordob",
    incio: "2022",
    fin: "2022",
    logo: "https://acceso.ispc.edu.ar/pluginfile.php/1/tool_tenant/headerlogo/1/logo_iniciales_ISPC_blanco.png",
  },
  {
    titulo: "DESARROLLADOR FULL STACK ANGULAR-JAVA",
    institucion: "Argentina programa",
    incio: "2022",
    fin: "2022",
    logo: "https://desa.argentinaprograma.inti.gob.ar/pluginfile.php/1/theme_moove/logo/1674860780/APLogo-20-20.png",
  },
];

let habilidades = [
  {
    titulo: "C#",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
  },
  {
    titulo: "Angular",
    imagen:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png",
  },
  {
    titulo: "Spring Boot",
    imagen:
      "https://e4developer.com/wp-content/uploads/2018/01/spring-boot.png",
  },
  {
    titulo: "SQL",
    imagen: "https://1000marcas.net/wp-content/uploads/2020/11/MySQL-logo.png",
  },
  {
    titulo: "Docker",
    imagen:
      "https://logos-world.net/wp-content/uploads/2021/02/Docker-Symbol.png",
  },
  {
    titulo: "Mongo DB",
    imagen:
      "https://res.cloudinary.com/hevo/image/upload/v1626694700/hevo-blog/MongoDB-sm-logo-500x400-1-1.gif",
  },
];

let agregarEducacion = () => {
  let educacionHTML = document.querySelector("#educacionHTML");

  let arrEducacion = "";
  {
  }

  educacion.forEach((element) => {
    arrEducacion += `<article class="estudios col-md-6 p-md-5 p-2">
        <h4>${element.titulo}</h4>
        <div class="row mt-5">
            <div class="col-9 fs-md-5 px-md-4"  style="color:#fff">
                <p>${element.institucion}</p>
                <p>${element.incio} - ${element.fin}</p>
            </div>
            <div class="col-3">
                <img src="${element.logo}" alt="" style="width: 100%;">
            </div>
        </div>
    </article>`;
  });
  educacionHTML.innerHTML = arrEducacion;
};
let agregarHabilidades = () => {
  let habilidadesHTML = document.querySelector("#habilidades");

  let arrHabilidades = "";
  {
  }

  habilidades.forEach((element) => {
    arrHabilidades += `<div class="col-4 img-item">
        <img src="${element.imagen}" alt=""
            style="width: 100%;">
        <p class="text-center fs-4" style="color:#fff">${element.titulo}</p>
    </div>`;
  });
  habilidadesHTML.innerHTML = arrHabilidades;
};

$(document).ready(() => {
  agregarEducacion();
  agregarHabilidades();
});

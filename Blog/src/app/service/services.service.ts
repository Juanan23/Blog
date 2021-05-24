import { Injectable } from '@angular/core';
import { Post } from '../interface/post.interface';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  arrPosts: Post[];


  constructor() {
    this.arrPosts = [
      {
        titulo: 'EL SILENCIO DEL CORDERON',
        texto: 'Los flamencos son aves gregarias altamente especializadas, que habitan sistemas salinos de donde obtienen su alimento (compuesto generalmente de algas microscópicas e invertebrados) y materiales para desarrollar sus hábitos reproductivos.',
        autor: '	George Orwell',
        imagen: 'https://i.blogs.es/8f4d95/silencio-de-los-corderos-poster/1366_2000.jpg',
        fecha: new Date('1990-20-30'),
        categoria: 'drama y terror',
      },
      {
        titulo: 'Vino pero se fue',
        texto: 'Hamas gano combinando una fuerte resistencia contra la ocupacion militar con la creacion de organizaciones sociales de base y de servicio a los pobres, una plataforma y una practica que probablemente haria ganar votos en cualquier lugar. La victoria electoral de Hamas es ominosa pero comprensible, a la luz de los acontecimientos. ',
        autor: 'Tony D\'Amato',
        imagen: 'https://m.media-amazon.com/images/I/31y0n2cYUeL.jpg',
        fecha: new Date(),
        categoria: 'drama',
      },
      {
        titulo: 'Van dos y se cae el del medio',
        texto: 'Simplemente como conjetura, imagine el lector una inversion de las circunstancias: que Hamas permitiese a los israelies vivir en cantones desparramados e invariables, virtualmente separados unos de otros, y en alguna pequeña parte de Jerusalen, mientras los palestinos construyen enormes asentamientos y proyectos de infraestructura para apoderarse de las tierras y los recursos de Israel, ',
        autor: 'Rocky Balboa',
        imagen: 'https://cdn.memegenerator.es/imagenes/memes/full/18/5/18057100.jpg',
        fecha: new Date('1995-10-20'),
        categoria: 'comedia',
      },
      {
        titulo: 'El vaso que colmó la gota',
        texto: 'El compromiso formal de Hamas de "destruir Israel" lo pone a la par con Estados Unidos e Israel, que prometieron por mucho tiempo que no habria ningun "Estado palestino adicional" (aparte de Jordania", hasta que ambas naciones aflojaron parcialmente su posicion, para aceptar un mini Estado constituido por los fragmentos que queden despues que Israel se apropie de todas las partes de Palestina que desea....',
        autor: 'Chris Gardner',
        imagen: 'https://carmenprada.files.wordpress.com/2016/05/vaso.png?w=640',
        fecha: new Date('2010-03-13'),
        categoria: 'terror',
      },
      {
        titulo: 'Se muiro y no vivio',
        texto: 'El compromiso formal de Hamas de "destruir Israel" lo pone a la par con Estados Unidos e Israel, que prometieron por mucho tiempo que no habria ningun "Estado palestino adicional" (aparte de Jordania", hasta que ambas naciones aflojaron parcialmente su posicion, para aceptar un mini Estado constituido por los fragmentos que queden despues que Israel se apropie de todas las partes de Palestina que desea....',
        autor: 'El dictador de Tomania',
        imagen: 'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/cinefilia/12-discursos-cinematograficos-para-motivarte-en-la-cuesta-de-enero/el-gran-dictador-haz-el-amor-no-la-guerra/125896004-1-esl-ES/El-gran-dictador-Haz-el-amor-no-la-guerra.jpg?resize=768:*',
        fecha: new Date('1940-04-20'),
        categoria: 'comedia  y drama',
      },
      {
        titulo: 'Mantequilla y sus aventuras',
        texto: 'Hamas gano combinando una fuerte resistencia contra la ocupacion militar con la creacion de organizaciones sociales de base y de servicio a los pobres, una plataforma y una practica que probablemente haria ganar votos en cualquier lugar. ',
        autor: 'William Wallace',
        imagen: 'https://cdn.generadormemes.com/media/created/girh630p8jbn2ku7enx0f2stqbqsug3oc8jz853epzzajefx49fi82w83wl5r43.jpg',
        fecha: new Date('2003-10-20'),
        categoria: 'aventura',
      },
      {
        titulo: 'Tengo miedo',
        texto: 'El oeste de Texas divide la frontera entre Mexico y Nuevo México. Es muy bella pero aspera, llena de cactus, en esta region se encuentran las Davis Mountains. Todo el terreno esta lleno de piedra caliza, torcidos arboles de mezquite y espinosos nopales. Para admirar la verdadera belleza desertica',
        autor: 'Aragorn II',
        imagen: 'https://www.descargarstickers.com/publico/static/miniatura/2020/05/604211.gif',
        fecha: new Date('2007-06-17'),
        categoria: 'terror',
      },
      {
        titulo: 'La oveja amarilla',
        texto: 'Don Uzeada de Ribera Maldonado de Bracamonte y Anaya era baja, rechoncha, abigotada. Ya no existia razon para llamar talle al suyo. Sus colores vivos, sanos, podian mas que el albayalde y el soliman del afeite, con que se blanqueaba por simular melancolias. Gastaba dos pa',
        autor: 'V de Vendetta',
        imagen: 'https://i.pinimg.com/originals/f4/3d/12/f43d122ea76bf3ef4e135648388db20c.jpg',
        fecha: new Date('1996-11-02'),
        categoria: 'ciencia ficción',
      }

    ]

  }

  getAllpost() {
    return this.arrPosts;
  }


  agregarPost(post: Post) {
    this.arrPosts.push(post);

  }


  getPostsByCategoria(cat) {

  }
}
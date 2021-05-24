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
        imagen: 'https://www.google.com/search?q=EL+SILENCIO+DEL+CORDERO&sxsrf=ALeKk02pE5UoIM7Lr_GhzdCV55nryTDS4w:1621866162647&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjfoP2jwuLwAhUMi1wKHfLlCVsQ_AUoAnoECAEQBA&biw=1450&bih=709#imgrc=HGdkGon-9-cHZM',
        fecha: new Date('1990-20-30'),
        categoria: 'drama y terror',
      },
      {
        titulo: 'Vino pero se fue',
        texto: 'Hamas gano combinando una fuerte resistencia contra la ocupacion militar con la creacion de organizaciones sociales de base y de servicio a los pobres, una plataforma y una practica que probablemente haria ganar votos en cualquier lugar. La victoria electoral de Hamas es ominosa pero comprensible, a la luz de los acontecimientos. ',
        autor: 'Tony D\'Amato',
        imagen: 'https://www.google.com/search?q=Vino+pero+se+fue&tbm=isch&ved=2ahUKEwiX4_ykwuLwAhUTcxoKHY7dCu0Q2-cCegQIABAA&oq=Vino+pero+se+fue&gs_lcp=CgNpbWcQA1D4rgRY-K4EYPe0BGgAcAB4AIABSYgBSZIBATGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=tLarYJe5LJPmaY67q-gO&bih=709&biw=1450#imgrc=x-yCm5g1zfYRtM',
        fecha: new Date(),
        categoria: 'drama',
      },
      {
        titulo: 'Van dos y se cae el del medio',
        texto: 'Simplemente como conjetura, imagine el lector una inversion de las circunstancias: que Hamas permitiese a los israelies vivir en cantones desparramados e invariables, virtualmente separados unos de otros, y en alguna pequeña parte de Jerusalen, mientras los palestinos construyen enormes asentamientos y proyectos de infraestructura para apoderarse de las tierras y los recursos de Israel, ',
        autor: 'Rocky Balboa',
        imagen: 'https://www.google.com/search?q=Van+dos+y+se+cae+el+del+medio&sxsrf=ALeKk00HEKCH48ejka3sNWloo50Tqmj2Bw:1621866324320&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiL_YjxwuLwAhXDxIUKHVGrDvAQ_AUoAXoECAEQAw&biw=1450&bih=709#imgrc=_TZ1MwxOWDfdfM',
        fecha: new Date(),
        categoria: 'comedia',
      },
      {
        titulo: 'El vaso que colmó la gota',
        texto: 'El compromiso formal de Hamas de "destruir Israel" lo pone a la par con Estados Unidos e Israel, que prometieron por mucho tiempo que no habria ningun "Estado palestino adicional" (aparte de Jordania", hasta que ambas naciones aflojaron parcialmente su posicion, para aceptar un mini Estado constituido por los fragmentos que queden despues que Israel se apropie de todas las partes de Palestina que desea....',
        autor: 'Chris Gardner',
        imagen: 'https://www.google.com/search?q=El+vaso+que+colm%C3%B3+la+gota&tbm=isch&ved=2ahUKEwjxpvnxwuLwAhVDeRoKHc7UDLUQ2-cCegQIABAA&oq=El+vaso+que+colm%C3%B3+la+gota&gs_lcp=CgNpbWcQA1DnzQRY580EYO_SBGgAcAB4AIABTIgBTJIBATGYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=VrerYPGjCcPyac6ps6gL&bih=709&biw=1450#imgrc=h27XPSesrzLZzM',
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
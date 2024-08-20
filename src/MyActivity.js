import React from "react";
import { Badge } from "react-bootstrap";

function MyActivity() {
  return (
    <div className='my_activity'>
      <div className='my_activity__card'>
        <div className='my_activity__icon'>
          <Badge variant='primary'>
            <i className='fas fa-calendar-alt'></i>
          </Badge>
        </div>
        <h3 className='my_activity__title'>Pilotage et Gestion de projet</h3>
        <p className='my_activity__description'>
          Je prends en charge la planification, la coordination et le suivi de
          vos projets, garantissant leur réussite dans le respect des délais et
          des budgets.
        </p>
      </div>
      <div className='my_activity__card'>
        <div className='my_activity__icon'>
          <Badge variant='warning'>
            <i className='fas fa-lightbulb'></i>
          </Badge>
        </div>
        <h3 className='my_activity__title'>Conseil</h3>
        <p className='my_activity__description'>
          J'interviens en amont pour vous aider à définir vos besoins et à
          choisir les solutions les plus adaptées à vos objectifs stratégiques.
        </p>
      </div>
      <div className='my_activity__card'>
        <div className='my_activity__icon'>
          <Badge variant='info'>
            <i className='fas fa-cogs'></i>
          </Badge>
        </div>
        <h3 className='my_activity__title'>Conception</h3>
        <p className='my_activity__description'>
          Je conçois des systèmes d'information robustes et évolutifs, en
          mettant l'accent sur l'alignement avec vos processus métiers et sur
          l'optimisation de vos performances.
        </p>
      </div>
      <div className='my_activity__card'>
        <div className='my_activity__icon'>
          <Badge variant='success'>
            <i className='fas fa-laptop-code'></i>
          </Badge>
        </div>
        <h3 className='my_activity__title'>Réalisation</h3>
        <p className='my_activity__description'>
          Je développe et mets en œuvre les solutions techniques, en assurant
          leur intégration fluide dans votre environnement existant.
        </p>
      </div>
      <div className='my_activity__card'>
        <div className='my_activity__icon'>
          <Badge variant='danger'>
            <i className='fas fa-tools'></i>
          </Badge>
        </div>
        <h3 className='my_activity__title'>Maintenance</h3>
        <p className='my_activity__description'>
          Je veille à la pérennité et à l'évolution de vos systèmes
          d'information, en assurant un support technique réactif et en
          prévenant les dysfonctionnements.
        </p>
      </div>
      <div className='my_activity__card my_activity__card--last'>
        <div className='my_activity__icon'>
          <Badge variant='dark'>
            <i className='fas fa-server'></i>
          </Badge>
        </div>
        <h3 className='my_activity__title'>Production et Exploitation</h3>
        <p className='my_activity__description'>
          J'accompagne la mise en production et le bon fonctionnement de vos
          systèmes, en optimisant leur performance et en garantissant une
          disponibilité maximale.
        </p>
      </div>
    </div>
  );
}

export default MyActivity;

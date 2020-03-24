import React from 'react';
import { Image } from 'semantic-ui-react';

const ProfilPage = () => (
  <div>
    <h1>Profil</h1>
    <Image src="'/images/wireframe/square-image.png'" circular />
    <div>
      <p>Pseudo: Damien</p>
      <p>Date de naissance:</p>
      <p>Email: damien97@gmail.com</p>
      <p>Inscrit depuis le 23 Mars 2020</p>
    </div>
    <nav>
      <button type="button">Modifier</button>
    </nav>
  </div>
);

export default ProfilPage;

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Search from '../components/search';
import Banner from '../components/banner';
import Single from '../components/single';
import { useState } from 'react';

export default function Home() {
  let [comments, setComments] = useState([
    {
      title: 'myyyyyyyyyyyyyyyyyyyyyyyyyyy TEST TEST TEST TEST VERCEEEEEEEL',
      content:
        'VERCEEEEEEEL vercel vercel vercel vercel',
    },
    {
      title: 'Coucou sous-titre',
      content:
        'bohemiannnnnnnnnnnnnnnnnnnnnnnnn123123',
    },
  ]);
  return (
    <div class="row">
      <Search />
      <Banner />
      <Single />
      <div className="col-12">
        {comments.map((comment) => (
          <div className="d-flex infImgTitre mb-3 mt-3">
            <img className src="img/jDidier.jpg" alt="" />
            <div className="titreimg d-flex flex-column align-items-start">
              <h4>{comment.title}</h4>
              <p>{comment.content}</p>
              <div className="col-12 d-flex justify-content-end mt-3">
                <div className="bTTn">
                  <button>
                    <i className="fas fa-chevron-circle-right fa-lg" />
                  </button>
                </div>
                <div className="bTTn">
                  <button>
                    <i className="fas fa-chevron-circle-right fa-lg" />
                  </button>
                </div>
                <div className="bTTn">
                  <button>
                    <i className="fas fa-chevron-circle-right fa-lg" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

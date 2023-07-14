import Image from "next/image";
import meusite from "../public/meusite.jpeg";

function Home() {
  return (
    <>
      <strong style={{ fontSize: 24 }}>{"<h1>"} meu site</strong>
      <br />
      <br />
      <div>
        <strong>pesquisar </strong>
        <input type="text" /> <button>pesuiqsar</button>
      </div>
      <div>
        <ul style={{ padding: 0, listStyle: "none" }}>
          <li>
            <a href="">CATEGORIAS</a>
          </li>
          <li>
            <a href="">loiras</a>
          </li>
          <li>
            <a href="">ruivas</a>
          </li>
          <li>
            <a href="">anões</a>
          </li>
          <li>
            <a href="">cavalos</a>
          </li>
          <li>
            <a href="">vegetais</a>
          </li>
          <li>
            <a href="">milfs</a>
          </li>
          <li>
            <a href="">materias de construção</a>
          </li>
        </ul>
      </div>
      <div>
        <Image src={meusite} width={520} height={520} alt="" />
      </div>
    </>
  );
}

export default Home;

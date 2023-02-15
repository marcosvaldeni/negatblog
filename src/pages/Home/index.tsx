import { Container } from "../../components/Container";
import { HomeHeader } from "./HomeHeader";

export function Home() {
  return (
    <Container>
      <HomeHeader />

      <section>
        <header>
          <span>
            Publicações
          </span>
          <span>
            6 publicações
          </span>
        </header>
        <input type="text" placeholder="Buscar conteúdo" />
      </section>
    </Container>
  );
}
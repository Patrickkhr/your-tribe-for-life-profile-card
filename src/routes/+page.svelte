<script>
	/** @type {import('./$types').PageData} */
	export let data;

</script>

<section>
  {#if data.person}
    <article>
      <div class="container">
        <article class="slide1">
          <h1>{data.person.name} {data.person.surname}</h1>
          <p>21 Jaar, Houten.</p>
        </article>
        <article class="slide2">
          <h2>front-end web developer</h2>
          <p>HTML, CSS & Javascript.</p>
        </article>
        <article class="slide3">
          <h3>about myself</h3>
          <p>Mijn naam is {data.person.name} en ik design en bouw websites. In mijn vrije tijd voetbal ik bij FC Delta Sports.</p>
        </article>
        <article class="slide4">
          <h4>contact</h4>
          <div>
            <a href="mailto:patrick.hordijk@hva.nl">Email</a>
            <a href="#">Website</a>
          </div>
        </article>
        <article class="content-1">
          <div class="">
            <h4>Draai om</h4>
            <img alt="Mugshot Patrick" src="/logo.png">
          </div>
        </article>
      </div>
    </article>
  {:else}
    <!-- This will show if no people are available -->
    <p>No data available</p>
  {/if}
</section>

<style>
  section {
    height: 100vh;
    background-color: whitesmoke;
  }
  section > article {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    height: 100%;
    margin-inline: 32px;
  }
  h1, h2, h3, h4 {
    font-size: 2em;
    color: white;
    text-align: right;
    padding: 0.3em 0.5em 0 0;
    text-transform: uppercase;
  }
  img {
    height: auto;
    width: auto;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-row-gap: 1em;
    position: relative;
  }
  .container > article {
    border-radius: 0.5em;
    background-color: black;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  }
  .container article:hover {
    transform: translate(5px, -10px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.6);
  }
  .container > article:nth-of-type(1) { 
    grid-area: 1 / 1 / 1 / 6;
    background-image: url('/shade1-rec.png');
    background-size: cover;
    position: relative;
  }
  .container article:nth-of-type(2) { 
    grid-area: 2 / 1 / 2 / 6; 
    background-image: url('/shade2-rec.png');
    background-size: cover;
    position: relative;
  }
  .container article:nth-of-type(3) { 
    grid-area: 3 / 1 / 3 / 6; 
    background-image: url('/shade3-rec.png');
    background-size: cover;
    position: relative;
  }
  .container article:nth-of-type(4) { 
    grid-area: 4 / 1 / 4 / 6; 
    background-image: url('/shade4-rec.png');
    background-size: cover;
    position: relative;
  }
  .container .content-1 { 
    grid-area: 1 / 1 / 5 / 10;
    background-image: url('/shade1.png');
    background-size: cover;
    z-index: 1;
  }

  .container .content-1:hover {
    grid-area: 1 / 6 / 5 / 10;
    margin-left: 1em;
  }

  .container article:hover ~ .content-1 {
    grid-area: 1 / 6 / 5 / 10;
    margin-left: 1em;
  }



  .container > article > p {
    color: white;
    padding: 0em 0.5em 0 1em;
    position: absolute;
    bottom: 1em;
    font-weight: 100;
  }
  .slide4 > div {
    position: absolute;
    padding: 0em 0.5em 0 1em;
    bottom: 1em;
  }
  .slide4 > div > a {
    color: white;
    font-weight: 100;
  }
</style>

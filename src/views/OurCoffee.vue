<template>
  <div class="about">
    <article>
      <h1>Vårt kaffe</h1>
      <p class="strong">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint similique
        laudantium sunt laboriosam odit officia, placeat error, ipsam facere
        incidunt vitae perferendis minima accusamus dolores nam velit totam
        ducimus non.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus,
        neque, pariatur ex quis necessitatibus exercitationem cupiditate
        molestiae numquam laborum distinctio fugiat enim adipisci ad facilis
        obcaecati debitis, porro sit.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis minus,
        neque, pariatur ex quis necessitatibus exercitationem cupiditate
        molestiae numquam laborum distinctio fugiat enim adipisci ad facilis
        obcaecati debitis, porro sit.
      </p>
    </article>
    <div class="img-wrapper">
      <img src="../assets/eva-cortado.jpg" alt="" />
      <h3 class="strong">Eva Cortado</h3>
      <p>VD & Grundare</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  text-align: left;
  article {
    width: 84%;
    margin-bottom: 2rem;
    h1 {
      margin-bottom: 2rem;
    }
    p{
      margin-bottom: 1.5rem;
      line-height: 22.4px;
    }
    .strong {
      font-weight: bold;
    }
  }
  .img-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 8rem;
    img {
      width: 7rem;
      height: 7rem;
      object-fit: cover;
      border-radius: 50%;
      margin-bottom: 0.4rem;
    }
    h3 {
      margin-bottom: 0.2rem;
    }
    p:nth-child(3) {
      font-size: 1.1rem;
    }
  }
}
</style>

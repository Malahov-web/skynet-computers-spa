<template>
  <div class="reviews__form" id="reviews__form" __style="display: none">
    <div class="reviews__form-header">
      <div class="reviews__form-title g-subtitle h4">Оставить отзыв</div>
    </div>
    <div class="reviews__form-content">
      <form class="reviews__form-form form--reviews">
        <div class="field-outer reviews__form-vote">
          <div class="reviews__rating-average-title">Ваша оценка:</div>
          <div class="reviews__rating-average-rating">
            <BaseSetRating class="asd"></BaseSetRating>
            <!-- <div class="rating" data-value="4">
              <ul>
                <li class="off"><span></span></li>
                <li class="off"><span></span></li>
                <li class="off"><span></span></li>
                <li class="off"><span></span></li>
                <li class="off"><span></span></li>
              </ul>
            </div> -->
          </div>
        </div>

        <template class="asd" v-if="0" style="display: none">
          <div class="field-outer">
            <label>Ваш комментарий</label>
            <textarea name="" class="textarea"></textarea>
          </div>
          <div class="field-outer">
            <label>Ваше Имя</label>
            <input type="text" class="field-text" placeholder="E-mail" />
          </div>
          <div class="field-outer">
            <label>Email</label>
            <input type="text" class="field-text" placeholder="Пароль" />
          </div>

          <div class="field-outer">
            <a href="#" class="button button-send"><span>Отправить</span></a>
          </div>
        </template>
      </form>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

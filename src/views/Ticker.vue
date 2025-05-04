<template>
  <div :class="$style.container">
    <Header />
    <div :class="$style.cards">
      <div :class="$style.card" v-for="card in cards" :key="card.title">
        <div :class="$style.image">
          <img :src="card.image" alt="" />
        </div>
        <div :class="$style.content">
          <div :class="$style.title">{{ card.title }}</div>
          <div :class="$style.list">
            <div
              v-for="item in card.list"
              :key="item.text"
              @click="card.activeItem = item.text"
              :class="[
                $style.item,
                { [$style.active]: card.activeItem === item.text },
              ]"
            >
              <div :class="$style.radio">
                <div :class="$style.decor"></div>
              </div>
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.icons">
      <div
        :class="$style.icon"
        v-for="item in icons"
        :key="item.icon"
        @click="openModal(item.modal)"
      >
        <img :src="item.icon" alt="" />
        <div :class="$style.text">{{ item.text }}</div>
      </div>
    </div>
  </div>
  <InfoModal v-if="iconsModals.info" />
  <WarningModal v-if="iconsModals.warning" />
  <CommentModal v-if="iconsModals.comment" />
</template>

<script>
import { mapState } from "vuex";
import Header from "@/components/Header.vue";
import CommentModal from "@/components/ticker/modals/CommentModal.vue";
import InfoModal from "@/components/ticker/modals/InfoModal.vue";
import WarningModal from "@/components/ticker/modals/WarningModal.vue";
export default {
  components: {
    Header,
    CommentModal,
    InfoModal,
    WarningModal,
  },
  mounted() {
    this.$store.commit("startTimer");
  },
  data() {
    return {
      cards: [
        {
          title: "Личное время",
          image: "/images/card2.png",
          activeItem: "",
          list: [
            {
              text: "Кратковременный перерыв",
            },
            {
              text: "Приём пищи",
            },
            {
              text: "Мероприятия личного характера",
            },
            {
              text: "Кратковременный перерыв",
            },
            {
              text: "Приём пищи",
            },
            {
              text: "Мероприятия личного характера",
            },
            {
              text: "Кратковременный перерыв",
            },
            {
              text: "Приём пищи",
            },
            {
              text: "Мероприятия личного характера",
            },
          ],
        },
        {
          title: "Незагруженное время",
          image: "/images/card2.png",
          activeItem: "",
          list: [
            {
              text: "Отсутствие работы",
            },
            {
              text: "Посторонние разговоры",
            },
          ],
        },
        {
          title: "Технические индикаторы",
          image: "/images/card2.png",
          activeItem: "",
          list: [
            {
              text: "Завершение наблюдения",
            },
          ],
        },
      ],
      icons: [
        {
          icon: "/icons/ticker/info.svg",
          text: "оставьте комментарий",
          modal: "info",
        },
        {
          icon: "/icons/ticker/warning.svg",
          text: "оставьте комментарий",
          modal: "warning",
        },
        {
          icon: "/icons/ticker/comment.svg",
          text: "оставьте комментарий",
          modal: "comment",
        },
      ],
    };
  },
  methods: {
    openModal(modal) {
      this.$store.commit("setIconsModals", {
        modal: modal,
        value: true,
      });
    },
  },
  computed: {
    ...mapState({
      iconsModals: (state) => state.modals.iconsModals,
    }),
  },
};
</script>

<style lang="scss" module>
.container {
  @include container;
  min-height: 100vh;
  position: relative;
  .cards {
    margin: 1.5rem 0 0 0;
    display: grid;
    align-items: start;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    .card {
      overflow: hidden;
      position: relative;
      padding: 1rem;
      background-color: $bg-white;
      border-radius: 2rem;
      .image {
        max-width: 100%;
        height: 16rem;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 2rem;
        }
      }
      .content {
        position: relative;
        top: -3rem;
        padding: 1rem;
        border-radius: 1rem;
        background: #f8fafa14;
        backdrop-filter: blur(36px);
        .title {
          text-align: center;
        }
        .list {
          padding-top: 1rem;
          .item {
            transition: all 0.3s ease-in-out;
            cursor: pointer;
            display: flex;
            align-items: start;
            gap: 0.625rem;
            margin: 0 0 0.5rem 0;
            &:last-child {
              margin: 0;
            }
            &.active {
              position: relative;
              left: -0.45rem;
              font-weight: 700;
              .radio {
                position: relative;
                top: -0.3rem;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 1rem;
                width: 1rem;
                height: 1rem;
                background-color: #321fd53d;
                border-radius: 50%;
                border: none;
                .decor {
                  padding: 0.5rem;
                  width: 0.5rem;
                  height: 0.5rem;
                  background-color: #386ed2;
                  border-radius: 50%;
                  border: 1px solid #386ed2;
                }
              }
            }
            .radio {
              position: relative;
              top: 0.0625rem;
              padding: 0.5rem;
              width: 0.5rem;
              height: 0.5rem;
              background-color: $bg-white;
              border-radius: 50%;
              border: 1px solid $black;
            }
          }
        }
      }
    }
  }
  .icons {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    .icon {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
      &:hover {
        .text {
          display: block;
        }
      }
    }
    .text {
      padding: 0.75rem 2.25rem;
      border-radius: 2.5rem;
      background-color: $black;
      font-weight: 700;
      font-size: 16px;
      color: $t-white;
      display: none;
    }
  }
}
</style>

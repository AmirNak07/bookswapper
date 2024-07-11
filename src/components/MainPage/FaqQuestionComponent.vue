<script setup lang="ts">
import {ref} from "vue";

const hidden = ref<boolean>(true);
const questionAnswer = ref<HTMLParagraphElement | null>(null);
const questionCheckmark = ref<HTMLImageElement | null>(null);

const QuestionInteract = () => {
  if (hidden.value) {
    hidden.value = false

    questionCheckmark.value?.classList.add("open-checkmark")
    questionCheckmark.value?.classList.add("open-checkmark-pos")
    questionCheckmark.value?.classList.remove("close-checkmark")
    questionCheckmark.value?.classList.remove("close-checkmark-pos")

    questionAnswer.value?.classList.add("open-window")
    questionAnswer.value?.classList.remove("close-window")
    questionAnswer.value?.classList.remove("hide")
  }
  else {
    hidden.value = true

    questionCheckmark.value?.classList.remove("open-checkmark-pos")
    questionCheckmark.value?.classList.remove("open-checkmark")
    questionCheckmark.value?.classList.add("close-checkmark")
    questionCheckmark.value?.classList.add("close-checkmark-pos")

    questionAnswer.value?.classList.remove("open-window")
    questionAnswer.value?.classList.add("close-window")
    setTimeout(() => {
      questionAnswer.value?.classList.add("hide")
    }, 500)
  }
};

defineProps<{
  question: string,
  answer: string
}>()
</script>

<template>
  <div class="faq-question" @click="QuestionInteract">
    <div class="faq-question-title-container">
      <p class="faq-question-title-text">{{question}}</p>
      <img src="/src/assets/svg/checkmark.svg" alt="" ref="questionCheckmark" class="faq-question-checkmark">
    </div>
    <p ref="questionAnswer" class="hide">{{answer}}</p>
  </div>
</template>

<style scoped>
.faq-question {
  background-color: #5C4742;
  display: flex;
  flex-direction: column;
  width: 80%;
  border-radius: 40px;
  padding: 10px 50px;
  margin: 15px 0;
}

.faq-question:hover {
  cursor: pointer;
}

.faq-question-title-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.faq-question-title-text {
  font-size: 50px;
}

.open-window {
  animation: 0.5s open-window;
}

.close-window {
  animation: 0.5s close-window;
}

.open-checkmark {
  animation: 0.5s open-checkmark;
}

.close-checkmark {
  animation: 0.5s close-checkmark;
}

.open-checkmark-pos {
  rotate: 180deg;
}

.close-checkmark-pos {
  rotate: 0deg;
}

@keyframes open-window {
  from {
    margin-top: -75px;
    opacity: 0;
  }
  to {
    opacity: 100;
    margin-top: 25px;
  }
}

@keyframes close-window {
  from {
    opacity: 100;
    margin-top: 25px;
  }
  to {
    margin-top: -75px;
    opacity: 0;
  }
}

@keyframes open-checkmark {
  from {
    rotate: 0deg;
  }
  to {
    rotate: 180deg;
  }
}

@keyframes close-checkmark {
  from {
    rotate: 180deg;
  }
  to {
    rotate: 0deg;
  }
}
</style>
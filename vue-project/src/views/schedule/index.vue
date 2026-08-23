<script setup lang="ts">
import { ref, computed } from 'vue';

// 현재 날짜 상태 관리
const newDate = ref<Date>(new Date());

// 현재 월 (0~11로 반환되므로 1을 더함)
const year = computed<number>(() => newDate.value.getFullYear());
const month = computed<number>(() => newDate.value.getMonth());
const date = computed<number>(() => newDate.value.getDate());
const week = computed<number>(() => newDate.value.getDay());
const daysOfWeek: string[] = ['일', '월', '화', '수', '목', '금', '토'];

// 이번 달 마지막 날짜 계산
const lastDay = computed<number>(() => {
  // 다음 달(month + 1)의 0번째 날은 '이번 달의 마지막 날'
  return new Date(year.value, month.value + 1, 0).getDate();
});
// 이번달 첫째날 요일
const firstWeek = computed(() => {
  return new Date(year.value, month.value, 1).getDay();
});

// 이전 달 마지막 날짜 계산
const prevLastDay = computed<number>(() => {
  // 다음 달(month + 1)의 0번째 날은 '이번 달의 마지막 날'
  return new Date(year.value, month.value, 0).getDate();
});

// 다음달 첫째날 요일
const nextWeek = computed(() => {
  return new Date(year.value, month.value + 1, 1).getDay();
});
</script>

<template>
  오늘 : {{ year }}.{{ month + 1 }}.{{ date }}<br />
  이번 달 마지막 날 : {{ lastDay }}<br />
  요일 : {{ firstWeek }}

  <main class="schedule">
    <div class="calendarInner">
      <div class="calTbl">
        <div class="thead">
          <div class="tr">
            <div v-for="(week, index) in daysOfWeek" :key="index" class="th">
              {{ week }}
            </div>
          </div>
        </div>
        <div
          class="tbody"
          style="
            min-height: 42.3906px;
            max-height: 254.344px;
            opacity: 1;
            width: auto;
            height: 254.344px;
            transform: translateX(0%);
          "
        >
          <!-- <div class="tr active">
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled date="20260726"><span class="text">26</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260727"><span class="text">27</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260728"><span class="text">28</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260729"><span class="text">29</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260730"><span class="text">30</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260731"><span class="text">31</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate active" date="20260801"><span class="text">1</span></button>
            </div>
          </div>
          <div class="tr">
            <div class="td">
              <button type="button" class="btnDate" date="20260802" disabled=""><span class="text">2</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260803"><span class="text">3</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260804" disabled=""><span class="text">4</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260805" disabled=""><span class="text">5</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260806" disabled=""><span class="text">6</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260807" disabled=""><span class="text">7</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260808"><span class="text">8</span></button>
            </div>
          </div>
          <div class="tr">
            <div class="td">
              <button type="button" class="btnDate" date="20260809"><span class="text">9</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate holidate" date="20260810"><span class="text">10</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260811"><span class="text">11</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260812"><span class="text">12</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260813" disabled=""><span class="text">13</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260814" disabled=""><span class="text">14</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate f-color1" date="20260815"><span class="text">15</span></button>
            </div>
          </div>
          <div class="tr">
            <div class="td">
              <button type="button" class="btnDate" date="20260816"><span class="text">16</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate f-color1" date="20260817"><span class="text">17</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260818">
                <span class="text">18</span>
                <div class="pay comma">3,655,260</div>
              </button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260819" disabled=""><span class="text">19</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260820" disabled=""><span class="text">20</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260821"><span class="text">21</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260822" disabled=""><span class="text">22</span></button>
            </div>
          </div>
          <div class="tr">
            <div class="td">
              <button type="button" class="btnDate today" date="20260823" disabled="">
                <span class="text">23</span>
              </button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260824" disabled=""><span class="text">24</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260825" disabled=""><span class="text">25</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260826" disabled=""><span class="text">26</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260827" disabled=""><span class="text">27</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260828" disabled=""><span class="text">28</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260829" disabled=""><span class="text">29</span></button>
            </div>
          </div>
          <div class="tr">
            <div class="td">
              <button type="button" class="btnDate" date="20260830" disabled=""><span class="text">30</span></button>
            </div>
            <div class="td">
              <button type="button" class="btnDate" date="20260831" disabled=""><span class="text">31</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260901"><span class="text">1</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260902"><span class="text">2</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260903"><span class="text">3</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260904"><span class="text">4</span></button>
            </div>
            <div class="td disbledDate">
              <button type="button" class="btnDate" disabled="" date="20260905"><span class="text">5</span></button>
            </div>
          </div> -->
        </div>
      </div>
    </div>
    <div class="calendar">
      <div>
        <span v-for="(week, index) in daysOfWeek" :key="index">
          {{ week }}
        </span>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>

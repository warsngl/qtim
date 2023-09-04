<template>
  <footer>
    <div class="footer__main">
      <div class="offer">
        <span>Is there a project?</span>
        <p>Let’s work together</p>
      </div>
      <div class="contacts">
        <div>For all questions</div>
        <div>+7 (920) 278—00—68</div>
        <div>qtim@agency.com</div>
        <div class="mt-[36px]">Office in Russia</div>
        <div class="mt-[12px]">139 Ruben Station Lake Drew, NM 52678</div>
        <div class="contacts__location bg-sec mt-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z"
              stroke="#E2BEFF"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div class="mt-[36px]">Office in Dubai</div>
        <div class="mt-[12px]">139 Ruben Station Lake Drew, NM 52678</div>
        <div class="contacts__location bg-sec mt-[8px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
          >
            <path
              d="M7.5 10.5L10.5 1.5L1.5 4.5L5.25 6.75L7.5 10.5Z"
              stroke="#E2BEFF"
              stroke-width="1.4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="footer__links">
      <div class="group-1">
        <div>Facebook</div>
        <div>Instagram</div>
        <div>Telegram</div>
      </div>

      <div class="group-2">
        <div class="group-2__circle bg-sec">
          <p class="text-[#F3F3F3] pt-[122px] mx-auto text-[32px] text-center">Go</p>
        </div>
      </div>

      <div class="group-3">
        <div>Behance</div>
        <div>Linkedn</div>
        <div>Privacy Policy</div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  background: var(--Style, #e2beff);
  @apply mt-auto h-[900px] px-[112px] overflow-hidden;
}
.footer__main {
  @apply flex;
}
.offer {
  @apply pt-[140px] w-[464px];
}
.offer span {
  @apply text-[16px];
}
.offer p {
  @apply text-[110px] underline mt-[56px];
}
.contacts {
  @apply ml-[368px] w-[152px] mt-[215px];
}
.contacts__location {
  @apply w-[32px] h-[32px] rounded-full flex justify-center items-center;
}
.footer__links {
  @apply flex justify-between mt-[243px] pb-[30px];
}
.group-1,
.group-3 {
  @apply flex;
}
.group-1 *,
.group-3 * {
  @apply mx-[16px];
}
.group-2 {
  @apply relative;
}
.group-2__circle {
  @apply w-[358px] h-[358px] rounded-full mt-[-129px];
}
</style>

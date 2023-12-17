<template>
  <section class="core-container">
    <div class="core-content">
      <div class="font-20-32-32 head-text">
        Our Core Values
      </div>
      <div class="core-text">
        <div class="core-text-content">
          <div class="left-container">
            <div class="left-content">
              <div
                class="left-content-box simplify"
                :class="{ active: coreActive === 'simplify' }"
                @click="onCoreClick('simplify')"
              >
                Simplify
              </div>
            </div>
            <div class="left-content">
              <div
                class="left-content-box eliminate"
                :class="{ active: coreActive === 'eliminate' }"
                @click="onCoreClick('eliminate')"
              >
                Eliminate
              </div>
            </div>
            <div class="left-content">
              <div
                class="left-content-box provide"
                :class="{ active: coreActive === 'provide' }"
                @click="onCoreClick('provide')"
              >
                Provide
              </div>
            </div>
            <div class="left-content">
              <div
                class="left-content-box promote"
                :class="{ active: coreActive === 'promote' }"
                @click="onCoreClick('promote')"
              >
                Promote
              </div>
            </div>
          </div>
          <div class="right-container">
            <div class="right-content simplify" :class="{ active: coreActive === 'simplify' }">
              <div class="right-content-box">
                <div class="font-12-16-16 top-text">
                  We simplify complexities
                </div>
                <div class="font-12-16-16 bottom-text">
                  The number of point solutions available in the healthcare sector has multiplied in recent years. While this rapid growth has fostered innovation, it also makes an already complicated system more convoluted. We integrate the most effective solutions to enhance our offering's coordination, connectivity, and seamlessness, providing a more comprehensive, adaptable, and accessible healthcare experience.
                </div>
              </div>
            </div>
            <div class="right-content eliminate" :class="{ active: coreActive === 'eliminate' }">
              <div class="right-content-box">
                <div class="font-12-16-16 top-text">
                  We eliminate friction wherever it occurs
                </div>
                <div class="font-12-16-16 bottom-text">
                  We work to allow more individuals to access the complicated healthcare system. This should entail commitment to embrace collaboration while also challenging convention. We eliminate the gaps between companies, their employees, and the numerous healthcare industry players. Though it may appear impossible to put this all together in one place, we firmly believe that this is our chance.
                </div>
              </div>
            </div>
            <div class="right-content provide" :class="{ active: coreActive === 'provide' }">
              <div class="right-content-box">
                <div class="font-12-16-16 top-text">
                  We provide the way and help you navigate it
                </div>
                <div class="font-12-16-16 bottom-text">
                  Challenging the healthcare industry is just the beginning. Having fundamentally altered how people view what is achievable with their benefits experience, we must strive tirelessly until that becomes the standard. We welcome this leadership role, and we will work to improve things by looking beyond the present situation with positivity and innovation.
                </div>
              </div>
            </div>
            <div class="right-content promote" :class="{ active: coreActive === 'promote' }">
              <div class="right-content-box">
                <div class="font-12-16-16 top-text">
                  We promote inlcusive healthcare
                </div>
                <div class="font-12-16-16 bottom-text">
                  Access to high-quality healthcare should be inclusive. We promote equal healthcare for all by providing innovation and clarity, including—and especially—people who were previously dissatisfied with the system.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="core-text-mobile">
        <div class="core-text-content">
          <div class="top-container">
            <div class="top-content">
              <div
                class="top-content-box simplify"
                :class="{ active: coreActive === 'simplify' }"
                @click="onCoreClick('simplify')"
              >
                Simplify
              </div>
              <hr class="divider" :class="{ active: coreActive === 'simplify' }">
            </div>
            <div class="top-content">
              <div
                class="top-content-box eliminate"
                :class="{ active: coreActive === 'eliminate' }"
                @click="onCoreClick('eliminate')"
              >
                Eliminate
              </div>
              <hr class="divider" :class="{ active: coreActive === 'eliminate' }">
            </div>
            <div class="top-content">
              <div
                class="top-content-box provide"
                :class="{ active: coreActive === 'provide' }"
                @click="onCoreClick('provide')"
              >
                Provide
              </div>
              <hr class="divider" :class="{ active: coreActive === 'provide' }">
            </div>
            <div class="top-content">
              <div
                class="top-content-box promote"
                :class="{ active: coreActive === 'promote' }"
                @click="onCoreClick('promote')"
              >
                Promote
              </div>
              <hr class="divider" :class="{ active: coreActive === 'promote' }">
            </div>
          </div>
          <div class="bottom-container">
            <div class="bottom-content simplify" :class="{ active: coreActive === 'simplify' }">
              <div class="bottom-content-box">
                <div class="top-text">
                  We simplify complexities
                </div>
                <div class="bottom-text">
                  The number of point solutions available in the healthcare sector has multiplied in recent years. While this rapid growth has fostered innovation, it also makes an already complicated system more convoluted. We integrate the most effective solutions to enhance our offering's coordination, connectivity, and seamlessness, providing a more comprehensive, adaptable, and accessible healthcare experience.
                </div>
              </div>
            </div>
            <div class="bottom-content-fix simplify-fix" :class="{ active: coreActive === 'simplify' }">
              <div class="bottom-content-box">
                <div class="top-text">
                  We simplify complexities
                </div>
                <div class="bottom-text">
                  The number of point solutions available in the healthcare sector has multiplied in recent years. While this rapid growth has fostered innovation, it also makes an already complicated system more convoluted. We integrate the most effective solutions to enhance our offering's coordination, connectivity, and seamlessness, providing a more comprehensive, adaptable, and accessible healthcare experience.
                </div>
              </div>
            </div>
            <div class="bottom-content eliminate" :class="{ active: coreActive === 'eliminate' }">
              <div class="bottom-content-box">
                <div class="top-text">
                  We eliminate friction wherever it occurs
                </div>
                <div class="bottom-text">
                  We work to allow more individuals to access the complicated healthcare system. This should entail commitment to embrace collaboration while also challenging convention. We eliminate the gaps between companies, their employees, and the numerous healthcare industry players. Though it may appear impossible to put this all together in one place, we firmly believe that this is our chance.
                </div>
              </div>
            </div>
            <div class="bottom-content-fix eliminate-fix" :class="{ active: coreActive === 'eliminate' }">
              <div class="bottom-content-box">
                <div class="top-text">
                  We eliminate friction wherever it occurs
                </div>
                <div class="bottom-text">
                  We work to allow more individuals to access the complicated healthcare system. This should entail commitment to embrace collaboration while also challenging convention. We eliminate the gaps between companies, their employees, and the numerous healthcare industry players. Though it may appear impossible to put this all together in one place, we firmly believe that this is our chance.
                </div>
              </div>
            </div>
            <div class="bottom-content provide" :class="{ active: coreActive === 'provide' }">
              <div class="bottom-content-box">
                <div class="top-text">
                  We provide the way and help you navigate it
                </div>
                <div class="bottom-text">
                  Challenging the healthcare industry is just the beginning. Having fundamentally altered how people view what is achievable with their benefits experience, we must strive tirelessly until that becomes the standard. We welcome this leadership role, and we will work to improve things by looking beyond the present situation with positivity and innovation.
                </div>
              </div>
            </div>
            <div class="bottom-content-fix provide-fix" :class="{ active: coreActive === 'provide' }">
              <div class="bottom-content-box">
                <div class="top-text">
                  We provide the way and help you navigate it
                </div>
                <div class="bottom-text">
                  Challenging the healthcare industry is just the beginning. Having fundamentally altered how people view what is achievable with their benefits experience, we must strive tirelessly until that becomes the standard. We welcome this leadership role, and we will work to improve things by looking beyond the present situation with positivity and innovation.
                </div>
              </div>
            </div>
            <div class="bottom-content promote" :class="{ active: coreActive === 'promote' }">
              <div class="bottom-content-box">
                <div class="top-text">
                  We promote inlcusive healthcare
                </div>
                <div class="bottom-text">
                  Access to high-quality healthcare should be inclusive. We promote equal healthcare for all by providing innovation and clarity, including—and especially—people who were previously dissatisfied with the system.
                </div>
              </div>
            </div>
            <div class="bottom-content-fix promote-fix" :class="{ active: coreActive === 'promote' }">
              <div class="bottom-content-box">
                <div class="top-text">
                  We promote inlcusive healthcare
                </div>
                <div class="bottom-text">
                  Access to high-quality healthcare should be inclusive. We promote equal healthcare for all by providing innovation and clarity, including—and especially—people who were previously dissatisfied with the system.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
let coreInterval = 0

export default {
  data () {
    return {
      coreActive: 'simplify'
    }
  },
  mounted () {
    coreInterval = setInterval(this.playCoreValues, 10000)
  },
  destroyed () {
    clearInterval(coreInterval)
  },
  methods: {
    onCoreClick (core) {
      clearInterval(coreInterval)
      this.coreActive = core
      coreInterval = setInterval(this.playCoreValues, 10000)
    },
    playCoreValues () {
      if (this.coreActive === 'simplify') {
        this.coreActive = 'eliminate'
      } else if (this.coreActive === 'eliminate') {
        this.coreActive = 'provide'
      } else if (this.coreActive === 'provide') {
        this.coreActive = 'promote'
      } else {
        this.coreActive = 'simplify'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.core-container {
  position: relative;
  padding: 0 96px;
}

.core-content {
  .head-text {
    font-weight: 700;
    color: #4C4F54;
    text-align: center;
    margin-bottom: 32px;
  }

  .core-text {
    padding: 48px 40px;
    background: #E2EAF4;
    border-radius: 6px;
    box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);

    .core-text-content {
      display: flex;

      .left-container {
        .left-content {
          margin-bottom: 16px;

          .left-content-box {
            padding-right: 24px;
            position: relative;
            cursor: pointer;
            color: #4C4F54;
          }

          .left-content-box::after {
            content: '';
            display: block;
            position: absolute;
            right: 0;
            top: 0;
            border-radius: 5px;
            width: 3px;
            height: 100%;
          }

          .simplify, .eliminate, .provide, .promote {
            transition: all 1s;
          }

          .simplify.active, .eliminate.active, .provide.active, .promote.active  {
            color: #0146AB;
          }

          .simplify::after, .eliminate::after, .provide::after, .promote::after {
            background-color: transparent;
            transition: all 1s;
          }

          .simplify.active::after, .eliminate.active::after, .provide.active::after, .promote.active::after {
            background-color: #0146AB;
            box-shadow: 0px 0px 6px rgba(1, 70, 171, 0.45);
          }
        }
      }

      .right-container {
        padding-left: 32px;
        position: relative;
        width: 100%;

        .right-content {
          position: absolute;
          width: 95%;

          .top-text {
            font-weight: 700;
            margin-bottom: 16px;
          }

          .bottom-text {
            font-weight: 400;
          }
        }

        .simplify, .eliminate, .provide, .promote {
          opacity: 0;
          transition: all 1s;
        }

        .simplify.active, .eliminate.active, .provide.active, .promote.active {
          opacity: 1;
        }
      }
    }
  }

  .core-text-mobile {
    display: none;
    padding: 24px;
    background: #E2EAF4;
    border-radius: 6px;
    box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);

    .core-text-content {
      .top-container {
        display: flex;

        .top-content {
          margin-right: 16px;

          .top-content-box {
            margin-bottom: 8px;
            font-size: 12px;
            cursor: pointer;
          }

          .divider {
            height: 4px;
            // background: #0146AB;
            background: transparent;
            border-radius: 5px;
            unicode-bidi: unset;
            margin: 0;
            overflow: unset;
            border-width: 0;
            border-style: unset;
            margin-block-start: 0;
            margin-inline-start: unset;
            margin-inline-end: unset;
            margin-block-end: 0;
            transition: all 1s;
          }

          .simplify, .eliminate, .provide, .promote {
            transition: all 1s;
          }

          .simplify.active, .eliminate.active, .provide.active, .promote.active  {
            color: #0146AB;
          }

          .divider.active {
            background: #0146AB;
            box-shadow: 0px 0px 6px rgba(1, 70, 171, 0.45);
          }
        }
      }

      .bottom-container {
        margin-top: 16px;
        position: relative;

        .bottom-content, .bottom-content-fix {
          position: absolute;
          top: 0;
          left: 0;

          .bottom-content-box {
            font-size: 12px;

            .top-text {
              font-weight: 700;
              margin-bottom: 8px;
            }

            .bottom-text {
              font-weight: 400;
            }
          }
        }

        .bottom-content-fix {
          position: relative;
        }

        .simplify, .eliminate, .provide, .promote {
          opacity: 0;
          transition: all 1s;
        }

        .simplify.active, .eliminate.active, .provide.active, .promote.active {
          opacity: 1;
        }

        .simplify-fix, .eliminate-fix, .provide-fix, .promote-fix {
          opacity: 0;
          display: none;
        }

        .simplify-fix.active, .eliminate-fix.active, .provide-fix.active, .promote-fix.active {
          display: block;
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .core-container {
    padding: 32px 24px;
  }

  .core-content {
    .head-text {
      margin-bottom: 24px;
    }

    .core-text {
      display: none;
    }

    .core-text-mobile {
      display: block;
    }
  }
}
</style>

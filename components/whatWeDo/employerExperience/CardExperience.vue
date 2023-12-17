<template>
  <section class="pd-96 experience-container">
    <div class="headText head-text">
      {{ $t('WHAT_WE_DO.CARD2.EXPERIENCE') }}
    </div>
    <div class="experience-content">
      <ul class="card-experience-container">
        <li v-for="(experience, idx) in experiences" :key="idx" class="card-box">
          <div
            :class="[
              'card-experience-box',
              experience.headline === 'Our solution overview' ? 'experience1' : '',
              experience.headline === 'For your employees' ? 'experience2' : '',
              experience.headline === 'Industry-leading partner ecosystem' ? 'experience3' : ''
            ]"
            :style="{
              borderColor:
                idx === 0
                  ? '#6EB7E4'
                  : idx === 1
                    ? '#7D83B4'
                    : '#DEA7B3'
            }"
            @click="handleCardClick(experience.headline)"
          >
            <div class="card-experience">
              <div class="icon-container">
                <div class="icon-box">
                  <img :src="require(`~/assets/images/${experience.icon}.png`)">
                </div>
              </div>
              <div
                class="font-14-18-18 headline"
                :style="{
                  color:
                    idx === 0
                      ? '#6EB7E4'
                      : idx === 1
                        ? '#7D83B4'
                        : '#DEA7B3'
                }"
              >
                {{ $t('EMPLOYER_EXPERIENCE.CARD.' + experience.label + '_HEAD') }}
              </div>
              <div class="font-12-14-14 description">
                {{ $t('EMPLOYER_EXPERIENCE.CARD.' + experience.label) }}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      experiences: [
        {
          icon: 'solution-experience',
          label: 'SOLUTION',
          headline: 'Our solution overview',
          description: 'A single connected benefits ecosystem for members and benefits leaders alike.',
          parth: ''
        },
        {
          icon: 'employee-experience',
          label: 'SIMPLIFIED',
          headline: 'For your employees',
          description: 'Our simplified and intuitive member experience, including navigation and advocacy, actively engages employees in their benefits.',
          parth: ''
        },
        {
          icon: 'partner-experience',
          label: 'MIXMATCH',
          headline: 'Industry-leading partner ecosystem',
          description: 'Mix and match from partners across medical, dental, vision, pharmacy, and point solutions.',
          parth: ''
        }
      ]
    }
  },
  methods: {
    handleCardClick (headline) {
      if (headline === 'Our solution overview') {
        this.$router.push('/what-we-do/our-solution')
      } else if (headline === 'For your employees') {
        this.$router.push('/what-we-do/employee-experience')
      } else if (headline === 'Industry-leading partner ecosystem') {
        this.$router.push('/what-we-do/partner-ecosystem')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.experience-container {
  position: relative;
}

.head-text {
  text-align: center;
}

.experience-content {
  margin-top: 40px;

  .card-experience-container {
    display: flex;
    justify-content: space-around;
    gap: 64px;

    .card-box {
      background: #fff;
      box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
      width: 33.33%;

      .card-experience-box {
        border-left: 8px solid;
        height: 100%;
        cursor: pointer;

        &.experience1, &.experience2, &.experience3 {
          background: #fff;
          transition: background 0.5s;
        }

        &.experience1:hover {
          background: #E7F6FF;
        }

        &.experience2:hover {
          background: #E4E7FF;
        }

        &.experience3:hover {
          background: #FFEAEE;
        }

        .card-experience {
          padding: 24px 32px;

          .icon-box {
            width: 29.5%;
            max-width: 96px;

            img {
              width: 100%;
              height: auto;
            }
          }

          .headline {
            margin: 24px 0 8px;
            color: #87B4BF;
            font-weight: 700;
          }

          .description {
            color: #4C4F54;
            font-weight: 400;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1008px) {
  .experience-content {
    margin-top: 24px;

    .card-experience-container {
      gap: 32px;
      flex-direction: column;

      .card-box {
        width: 100%;

        .card-experience-box {
          .card-experience {
            padding: 24px;

            .headline {
              font-size: 14px
            }

            .description {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .experience-container {
    padding: 32px 24px 118px;
  }

  .head-text {
    font-size: 20px;
  }

  .experience-content {
    margin-top: 24px;

    .card-experience-container {
      gap: 32px;
      flex-direction: column;

      .card-box {
        width: 100%;

        .card-experience-box {
          .card-experience {
            padding: 24px;

            .icon-box {
              width: 18%;
            }

            .headline {
              font-size: 14px
            }

            .description {
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}

@media screen and (max-width: 414PX) {
  .experience-container {
    padding: 32px 24px;
  }

  .big-experience-quote {
    bottom: -152px;
  }
}
</style>

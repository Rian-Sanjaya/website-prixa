<template>
  <section class="pd-96 serve-container">
    <div class="serve-content">
      <div class="serve1">
        <div class="left-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/members/serve1.png">
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="right-content">
            <div class="headText head-text">
              {{ $t('WHO_WE_SERVE.MEMBERS.CLIENT.ENABLING') }}
            </div>
            <div class="subText sub-text">
              {{ $t('WHO_WE_SERVE.MEMBERS.CLIENT.ENABLING_DESC') }}
            </div>
          </div>
        </div>
      </div>
      <div class="serve2">
        <div class="left-container">
          <div class="left-content">
            <div class="headText head-text">
              {{ $t('WHO_WE_SERVE.MEMBERS.CLIENT.GET') }}
            </div>
            <div class="subText sub-text">
              <div class="sub-text1">
                {{ $t('WHO_WE_SERVE.MEMBERS.CLIENT.GET_DESC1') }}
              </div>
              <div class="sub-text2">
                {{ $t('WHO_WE_SERVE.MEMBERS.CLIENT.GET_DESC2') }}
              </div>
              <div class="sub-text3">
                {{ $t('WHO_WE_SERVE.MEMBERS.CLIENT.GET_DESC3') }}
                <span>
                  <img src="~/assets/images/members/twofourseven.png">
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <div class="picture-container">
            <div class="picture-box">
              <img src="~/assets/images/members/serve2.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'MembersClientServe'
}
</script>

<style lang="less" scoped>
.serve-content {
  padding: 0 120px;

  .serve1, .serve2 {
    display: flex;
    // gap: 96px;
    gap: 9%;
    justify-content: space-between;

    .left-container, .right-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .left-container {
      width: 40%;

      .picture-container {
          display: flex;
          justify-content: center;

        .picture-box {
          width: 100%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }

    .right-container {
      width: 60%;

      .right-content {
        .sub-text {
          margin-top: 16px;
        }
      }
    }
  }

  .serve2 {
    .left-container {
      width: 60%;

      .left-content {
        .sub-text {
          margin-top: 16px;

          .sub-text2 {
            margin: 24px 0;
          }

          .sub-text3 {
            span {
              display: inline-block;
              width: 4%;

              img {
                width: 100%;
                height: auto;
              }
            }
          }
        }
      }
    }

    .right-container {
      width: 40%;

      .picture-container {
          display: flex;
          justify-content: center;

        .picture-box {
          width: 80%;

          img {
            width: 100%;
            height: auto;
          }
        }
      }
    }
  }

  .serve2 {
    margin-top: 65px;
  }
}

@media screen and (max-width: 768px) {
  .serve-container {
    padding: 32px 24px;
  }

  .serve-content {
    padding: 0 60px;

    .serve1, .serve2 {
      flex-direction: column;
      gap: 16px;

      .left-container, .right-container {
        width: 100%;

        .left-content {
          .sub-text {
            margin-top: 16px;
          }
        }

        .right-content {
          .sub-text {
            margin-top: 16px;
          }
        }
      }
    }

    .serve2 {
      .right-container {
        order: -1;

        .picture-container {
          .picture-box {
            width: 100%;
          }
        }
      }
    }

    .serve2 {
      margin-top: 48px;
    }
  }
}
</style>

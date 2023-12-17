<template>
  <section class="pd-96 calculator-container">
    <div class="label-header-content">
      <div class="head-title-box">
        <div class="icon-box">
          <img src="~/assets/images/chb/head-title.png">
        </div>
        <div class="font-14-20-20 title-text-box">
          <div class="register-text">
            {{ $t('CALCULATORCHB.CORPORATE') }}
          </div>
        </div>
      </div>
    </div>
    <div class="calculator-content">
      <div class="left-container">
        <div class="calculator-form-box">
          <form class="form-content">
            <div class="form-item">
              <div class="item-label">
                <span class="font-12-14-14 required-label">{{ $t('CALCULATORCHB.EMPLOYEES') }}</span>
              </div>
              <!-- <div class="item-input-box">
                <input
                  v-model="noOfEmployees"
                  type="text"
                  :disabled="isDisable"
                  class="font-12-14-14 item-input"
                  placeholder="Number of employees"
                  @keypress="NumbersOnly"
                >
              </div> -->
              <div class="item-inpu-number-box">
                <a-input-number
                  v-model="noOfEmployees"
                  :disabled="isDisable"
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                  class="font-12-14-14 item-input-number"
                  size="large"
                  :placeholder="$t('CALCULATORCHB.EMPLOYEES')"
                  @keyup="NumbersOnly"
                />
              </div>
            </div>
            <div class="form-item">
              <div class="item-label">
                <span class="font-12-14-14 required-label">{{ $t('CALCULATORCHB.ANNUAL') }}</span>
              </div>
              <div class="item-inpu-number-box">
                <a-input-number
                  v-model="companyAnnualPremi"
                  :disabled="isDisable"
                  class="font-12-14-14 item-input-number"
                  size="large"
                  :placeholder="$t('CALCULATORCHB.ANNUAL')"
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                  @keyup="NumbersOnly"
                />
              </div>
            </div>
            <div class="form-item">
              <div class="item-label ratio">
                <span class="font-12-14-14 required-label">{{ $t('CALCULATORCHB.RATIO') }}</span>
              </div>
              <div class="item-input-box">
                <a-slider
                  v-model="claimRatio"
                  :marks="marks"
                  :default-value="claimRatio"
                  :tooltip-visible="true"
                  :disabled="isAllDisable"
                  :tip-formatter="sliderFormat"
                  class="item-slider"
                  @change="handleRatioChange"
                />
              </div>
            </div>
            <div class="form-item">
              <div class="check-ration-box">
                <a-checkbox v-model="checkRatio" class="check-ratio" @change="handleCheckRatio">
                  {{ $t('CALCULATORCHB.CHECK') }}
                </a-checkbox>
              </div>
            </div>
            <div class="form-item">
              <div class="item-label">
                <span class="font-12-14-14 required-label">{{ $t('CALCULATORCHB.BUDGET') }}</span>
              </div>
              <div class="item-inpu-number-box">
                <a-input-number
                  v-model="companyBudget"
                  :disabled="isDisable"
                  :formatter="value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
                  class="font-12-14-14 item-input-number"
                  size="large"
                  :placeholder="$t('CALCULATORCHB.BUDGET')"
                  @keyup="NumbersOnly"
                />
              </div>
            </div>
            <div v-if="!isAllDisable" class="submit-box">
              <button type="button" class="submit-btn" @click="onPremiCheckClick">
                {{ $t('CALCULATORCHB.PREMI') }}
              </button>
            </div>
            <div v-if="isAllDisable" class="contact-box">
              <button type="button" class="contact-btn" @click="onContactUsClick">
                {{ $t('CALCULATORCHB.CONTACT') }}
              </button>
            </div>
          </form>
          <div class="font-12-14-14 description">
            {{ $t('CALCULATORCHB.CALCULATION') }}
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="youtube-container">
          <div class="youtube-box">
            <iframe
              id="widget2"
              frameborder="0"
              allowfullscreen="true"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="Prixa: Tunjangan Kesehatan Perusahaan yang Optimal #PrixaSekarang"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/jDLuJLoaA_g?autoplay=0&amp;mute=0&amp;controls=1&amp;loop=0&amp;origin=https%3A%2F%2Fwww.prixa.ai&amp;playsinline=1&amp;enablejsapi=1&amp;widgetid=1"
            />
          </div>
        </div>
      </div>
    </div>
    <div
      :class="[
        'premi-checked-container',
        !showPremiChecked ? 'hide' : ''
      ]"
    >
      <div class="left-container">
        <div class="left-content">
          <div class="benefit-box">
            <div class="prixa-benefit-box">
              <img src="~/assets/images/chb/prixa-benefit.png">
            </div>
            <div class="title-head">
              {{ $t('CALCULATORCHB.HEALTH') }}
            </div>
            <div class="description">
              {{ $t('CALCULATORCHB.JUST1') }} <span style="font-weight: 700">{{ $t('CALCULATORCHB.JUST2') }}</span>{{ $t('CALCULATORCHB.JUST3') }}
            </div>
          </div>
          <div class="saving-content">
            <div class="saving-label">
              {{ $t('CALCULATORCHB.SAVE') }}
            </div>
            <div class="arrow-bend-box">
              <img src="~/assets/images/chb/arrow-bend-down-right.png">
            </div>
            <div class="percent-box">
              {{ savingAmt }} %
            </div>
          </div>
        </div>
      </div>
      <div class="middle-container">
        <div class="middle-content">
          <div class="equal-text">
            =
          </div>
        </div>
      </div>
      <div class="right-container">
        <div class="right-content">
          <div class="fact-box">
            <div class="fact-image-box">
              <img src="~/assets/images/chb/fact-icon.png">
            </div>
            <div class="title-head">
              {{ $t('CALCULATORCHB.FACT') }}
            </div>
            <!-- <div class="description">
              You can save upfront payment of {{ savingAmt }} % equivalent to the cost of treating all your employees to a meal every day!
            </div> -->
            <div v-if="savingAmt < 10" class="description">
              <!-- {{ factWriting.fact1[0] }} {{ savingAmt }}% {{ factWriting.fact1[1] }} -->
              {{ $t('CALCULATORCHB.FACTWRITING.FACT1[0]') }} <span style="font-weight: 700">{{ savingAmt }}%</span> {{ $t('CALCULATORCHB.FACTWRITING.FACT1[1]') }}
            </div>
            <div
              v-else-if="savingAmt >= 10 && savingAmt <= 20"
              class="description"
            >
              <!-- {{ factWriting.fact2[0] }} {{ savingAmt }}% {{ factWriting.fact2[1] }} -->
              {{ $t('CALCULATORCHB.FACTWRITING.FACT2[0]') }} <span style="font-weight: 700">{{ savingAmt }}%</span> {{ $t('CALCULATORCHB.FACTWRITING.FACT2[1]') }}
            </div>
            <div v-else-if="savingAmt > 20" class="description">
              <!-- {{ factWriting.fact3[0] }} {{ savingAmt }}% {{ factWriting.fact3[1] }} -->
              {{ $t('CALCULATORCHB.FACTWRITING.FACT3[0]') }} <span style="font-weight: 700">{{ savingAmt }}%</span> {{ $t('CALCULATORCHB.FACTWRITING.FACT3[1]') }}
            </div>
          </div>
        </div>
        <div v-if="savingAmt < 10" class="icon-box">
          <img src="~/assets/images/chb/money.png">
        </div>
        <div v-else-if="savingAmt >= 10 && savingAmt <= 20" class="icon-box">
          <img src="~/assets/images/chb/hot-meal.png">
        </div>
        <div v-else-if="savingAmt > 20" class="icon-box">
          <img src="~/assets/images/chb/building.png">
        </div>
        <div class="circle-fact">
          <img src="~/assets/images/chb/circle-fact.png">
        </div>
      </div>
    </div>
    <div
      :class="[
        'premi-checked-description',
        !showPremiChecked ? 'hide' : ''
      ]"
    >
      <div class="description-text">
        {{ $t('CALCULATORCHB.ILLUSTRATION') }}
      </div>
    </div>
    <div
      :class="[
        'premi-checked-table',
        !showPremiChecked ? 'hide' : ''
      ]"
    >
      <div :class="['background-blur', blurTablePremi ? 'blur' : '']" :style="{ width: blurAreaWidth + 'px' }" />
      <table class="table-container">
        <tr class="table-row">
          <td class="col-1">
            {{ $t('CALCULATORCHB.PLAN') }}
          </td>
          <td class="col-2">
            {{ $t('CALCULATORCHB.HIGH') }}
          </td>
          <td class="col-3">
            {{ $t('CALCULATORCHB.MID') }}
          </td>
          <td class="col-4">
            {{ $t('CALCULATORCHB.LOW') }}
          </td>
        </tr>
        <tr class="table-row">
          <td class="col-1">
            {{ $t('CALCULATORCHB.INPATIENT') }}
          </td>
          <td class="col-2">
            Rp{{ formatNumber(inpatient.high) }}
          </td>
          <td class="col-3">
            Rp{{ formatNumber(inpatient.mid) }}
          </td>
          <td class="col-4">
            Rp{{ formatNumber(inpatient.low) }}
          </td>
        </tr>
        <tr class="table-row">
          <td class="col-1">
            {{ $t('CALCULATORCHB.OUTPATIENT') }}
          </td>
          <td class="col-2">
            Rp{{ formatNumber(outpatient.high) }}
          </td>
          <td class="col-3">
            Rp{{ formatNumber(outpatient.mid) }}
          </td>
          <td class="col-4">
            Rp{{ formatNumber(outpatient.low) }}
          </td>
        </tr>
        <tr class="table-row blur-row">
          <td class="col-1">
            MATERNITY
          </td>
          <td class="col-2">
            Rp{{ formatNumber(maternity.high) }}
          </td>
          <td class="col-3">
            Rp{{ formatNumber(maternity.mid) }}
          </td>
          <td class="col-4">
            Rp{{ formatNumber(maternity.low) }}
          </td>
        </tr>
        <tr class="table-row blur-row">
          <td class="col-1">
            Medical Check Up
          </td>
          <td class="col-2">
            Rp{{ formatNumber(medicalCheckUp.high) }}
          </td>
          <td class="col-3">
            Rp{{ formatNumber(medicalCheckUp.mid) }}
          </td>
          <td class="col-4">
            Rp{{ formatNumber(medicalCheckUp.low) }}
          </td>
        </tr>
        <tr class="table-row">
          <td class="col-1">
            Dental Care
          </td>
          <td class="col-2">
            Rp{{ formatNumber(dentalCare.high) }}
          </td>
          <td class="col-3">
            Rp{{ formatNumber(dentalCare.mid) }}
          </td>
          <td class="col-4">
            Rp{{ formatNumber(dentalCare.low) }}
          </td>
        </tr>
        <tr class="table-row">
          <td class="col-1">
            Glasses
          </td>
          <td class="col-2">
            Rp{{ formatNumber(glasses.high) }}
          </td>
          <td class="col-3">
            Rp{{ formatNumber(glasses.mid) }}
          </td>
          <td class="col-4">
            Rp{{ formatNumber(glasses.low) }}
          </td>
        </tr>
      </table>
      <!-- <div class="blur-container">
        <table>
          <tr>
            <td>MATERNITY</td>
            <td>Rp{{ maternity.high }}</td>
            <td>Rp{{ maternity.mid }}</td>
            <td>Rp{{ maternity.low }}</td>
          </tr>
        </table>
      </div> -->
    </div>
    <div
      :class="[
        'contact-container',
        !showPremiChecked ? 'hide' : ''
      ]"
    >
      <div class="font-12-16-16 description">
        {{ $t('CALCULATORCHB.MORE') }}
      </div>
      <div class="contact-box">
        <button type="button" class="contact-btn" @click="onContactUsClick">
          {{ $t('CALCULATORCHB.CONTACT') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CalcChb',
  data () {
    return {
      checkRatio: false,
      marks: {
        0: {
          style: {
            color: '#0146AB'
          },
          label: '0'
        },
        100: {
          style: {
            color: '#0146AB'
          },
          label: '100%'
        }
      },
      isAllDisable: false,
      isDisable: false,
      showPremiChecked: false,
      blurTablePremi: false,
      noOfEmployees: '',
      companyAnnualPremi: '',
      claimRatio: 80,
      companyBudget: '',
      savingAmt: 0,
      budgetEachEmployee: 0,
      percentageLimitHigh: 0,
      percentageLimitMid: 0,
      percentageLimitLow: 0,
      percentageCareInpatient: 0,
      percentageCareOutpatient: 0,
      percentageCareMaternity: 0,
      baseInpatient: 0,
      baseOutpatient: 0,
      baseMaternity: 0,
      inpatient: {
        high: 1500000,
        mid: 1500000,
        low: 1500000
      },
      outpatient: {
        high: 2000000,
        mid: 2000000,
        low: 2000000
      },
      maternity: {
        high: 2500000,
        mid: 2500000,
        low: 2500000
      },
      medicalCheckUp: {
        high: 0,
        mid: 0,
        low: 0
      },
      dentalCare: {
        high: 0,
        mid: 0,
        low: 0
      },
      glasses: {
        high: 0,
        mid: 0,
        low: 0
      },
      factWriting: {
        fact1: [
          this.$i18n.locale === 'id' ? 'Biaya yang dikorting hingga' : 'With an up to',
          this.$i18n.locale === 'id' ? 'bisa digunakan untuk tambahan bonus tahunan karyawan lho!' : 'discount, you can allocate your costs for additional annual employee bonuses!'
        ],
        fact2: [
          this.$i18n.locale === 'id' ? 'Biaya yang dihemat sebesar' : 'The saved cost of',
          this.$i18n.locale === 'id' ? 'dapat dialokasikan untuk makan-makan seluruh karyawan di akhir pekan' : 'can be used to treat all employees to a meal on weekends'
        ],
        fact3: [
          this.$i18n.locale === 'id' ? 'Potongan harga yang diberikan sebesar' : 'The price discount given is',
          this.$i18n.locale === 'id' ? 'setara dengan biaya sewa kantor di daerah SCBD' : 'equivalent to the cost of renting an office in the SCBD area'
        ]
      },
      blurAreaWidth: 0
    }
  },
  methods: {
    formatNumber (num) {
      return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    calculatePremi () {
      const saveAmt = Math.round(100 - (this.companyBudget / this.companyAnnualPremi * 100))
      this.savingAmt = saveAmt < 0 ? 0 : saveAmt

      this.budgetEachEmployee = (this.companyBudget / this.noOfEmployees) * 12

      // percentageLimitHigh
      if (this.budgetEachEmployee <= 5000000) {
        this.percentageLimitHigh = 0
      } else if (this.budgetEachEmployee <= 20000000) {
        this.percentageLimitHigh = 120
      } else if (this.budgetEachEmployee <= 50000000) {
        this.percentageLimitHigh = 0
      } else if (this.budgetEachEmployee >= 50000001) {
        this.percentageLimitHigh = 120
      } else {
        this.percentageLimitHigh = 0
      }

      // percentageLimitMid
      if (this.budgetEachEmployee <= 5000000) {
        this.percentageLimitMid = 100
      } else if (this.budgetEachEmployee <= 10000000) {
        this.percentageLimitMid = 0
      } else if (this.budgetEachEmployee >= 10000001) {
        this.percentageLimitMid = 100
      } else {
        this.percentageLimitMid = 0
      }

      // percentageLimitLow
      if (this.budgetEachEmployee <= 5000000) {
        this.percentageLimitLow = 0
      } else if (this.budgetEachEmployee <= 20000000) {
        this.percentageLimitLow = 80
      } else if (this.budgetEachEmployee <= 50000000) {
        this.percentageLimitLow = 0
      } else if (this.budgetEachEmployee >= 50000001) {
        this.percentageLimitLow = 80
      } else {
        this.percentageLimitLow = 0
      }

      // percentageCareInpatient
      if (this.budgetEachEmployee <= 20000000) {
        this.percentageCareInpatient = 0
      } else if (this.budgetEachEmployee <= 75000000) {
        this.percentageCareInpatient = 80
      } else if (this.budgetEachEmployee >= 75000001) {
        this.percentageCareInpatient = 50
      } else {
        this.percentageCareInpatient = 0
      }

      // percentageCareOutpatient
      if (this.budgetEachEmployee <= 20000000) {
        this.percentageCareOutpatient = 100
      } else if (this.budgetEachEmployee >= 20000001) {
        this.percentageCareOutpatient = 20
      } else {
        this.percentageCareOutpatient = 0
      }

      // percentageCareMaternity
      if (this.budgetEachEmployee <= 75000000) {
        this.percentageCareMaternity = 0
      } else if (this.budgetEachEmployee >= 75000001) {
        this.percentageCareMaternity = 30
      } else {
        this.percentageCareMaternity = 0
      }

      this.baseInpatient = this.budgetEachEmployee * this.percentageCareInpatient / 100
      this.baseOutpatient = this.budgetEachEmployee * this.percentageCareOutpatient / 100
      this.baseMaternity = this.budgetEachEmployee * this.percentageCareMaternity / 100

      this.inpatient.high = Math.round(this.percentageLimitHigh * this.baseInpatient / 100)
      this.outpatient.high = Math.round(this.percentageLimitHigh * this.baseOutpatient / 100)
      this.maternity.high = Math.round(this.percentageLimitHigh * this.baseMaternity / 100)

      this.inpatient.mid = Math.round(this.percentageLimitMid * this.baseInpatient / 100)
      this.outpatient.mid = Math.round(this.percentageLimitMid * this.baseOutpatient / 100)
      this.maternity.mid = Math.round(this.percentageLimitMid * this.baseMaternity / 100)

      this.inpatient.low = Math.round(this.percentageLimitLow * this.baseInpatient / 100)
      this.outpatient.low = Math.round(this.percentageLimitLow * this.baseOutpatient / 100)
      this.maternity.low = Math.round(this.percentageLimitLow * this.baseMaternity / 100)
    },
    calculateCompanyBudgetManual () {
      if (this.claimRatio >= 90) {
        this.isDisable = true
      } else {
        if (!this.noOfEmployees || !this.companyAnnualPremi || !this.claimRatio) {
          return
        }
        this.calculatePremi()
      }
    },
    handleRatioChange (value) {
      this.isDisable = false
      if (this.claimRatio >= 90) {
        this.isDisable = true
      } else {
        if (!this.noOfEmployees || !this.companyAnnualPremi || !this.claimRatio) {
          return
        }

        this.companyBudget = Math.round((this.companyAnnualPremi * this.claimRatio / 100) + (this.noOfEmployees * 50000))

        // this.calculatePremi()
      }
    },
    handleCheckRatio (e) {
      this.checkRatio = e.target.checked
      this.isDisable = this.checkRatio
      this.isAllDisable = this.checkRatio
      this.showPremiChecked = false
      this.blurTablePremi = false
      if (this.claimRatio > 90) {
        this.isDisable = true
      }
    },
    NumbersOnly (evt) {
      /* eslint-disable */
      // window.console.log(evt)
      let data = evt.target
      let string = data.value.replace(/\D/g, "")
      let final = string.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      data.value = final
      // evt = (evt) ? evt : window.event;
      // const charCode = (evt.which) ? evt.which : evt.keyCode
      // window.console.log(charCode)
      // if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
      //   evt.preventDefault()
      // } else {
      //   return true
      // }
      /* eslint-enable */
    },
    onPremiCheckClick (e) {
      e.preventDefault()
      if (this.noOfEmployees && this.companyAnnualPremi && this.claimRatio && this.companyBudget) {
        this.calculatePremi()

        this.showPremiChecked = true
        setTimeout(() => {
          this.blurTablePremi = true
          const widthContainer = document.querySelector('.premi-checked-table')
          const widthTableContainer = document.querySelector('.table-container')
          this.blurAreaWidth = widthContainer.offsetWidth > widthTableContainer.offsetWidth ? widthContainer.offsetWidth : widthTableContainer.offsetWidth
        }, 3000)
      }
    },
    onContactUsClick () {
      window.open('https://wa.me/6281380684764', '_blank')
    },
    sliderFormat (value) {
      return `${value}%`
    }
  }
}
</script>

<style lang="less" scoped>
.label-header-content {
  padding: 0 32px;

  .head-title-box {
    display: flex;
    gap: 8px;
    margin-bottom: 16px;

    .icon-box {
      width: 3%;
      min-width: 24px;
      max-width: 37.6719px;

      img {
        width: 100%;
        height: auto;
      }
    }

    .title-text-box {
      color: #0146AB;
      font-weight: 500;
      display: flex;
      align-items: center;
    }
  }
}

.calculator-content {
  display: flex;
  justify-content: space-between;
  gap: 80px;
  overflow: hidden;
  padding: 0 32px;

  .left-container {
    width: 50%;
    // padding-left: 24px;

    .calculator-form-box {
      .form-content {
        margin: 0 0 24px;

        .form-item {
          margin-bottom: 40px;

          .item-label {
            margin-bottom: 8px;
            color: #0146AB;

            .required-label::before {
              content: '*';
              position: relative;
              top: 2px;
              color: #f5222d;
              margin-right: 4px;
            }
          }

          .item-label.ratio {
            margin-bottom: 48px;
          }

          .item-input-box{
            .item-input {
              width: 100%;
              padding: 16px 12px;
              border: 1px solid #D9D9D9;
              border-radius: 8px;
              color: #B2B3B5;
              font-weight: 400;
            }
          }

          .item-inpu-number-box {
            .item-input-number {
              width: 100%;
              border-radius: 8px;
              color: #4C4F54;
              font-weight: 400;
              height: 54px;
              padding-top: 7px;
            }
          }

          .check-ration-box {
            padding-left: 8px;
          }
        }

        .submit-box, .contact-box {
          .submit-btn, .contact-btn {
            padding: 16px 32px;
            color: #fff;
            font-size: clamp(0.86rem, 0.927vw, 1rem);
            font-weight: 700;
            background: #0146AB;
            display: inline-block;
            border-radius: 8px;
            cursor: pointer;
            position: relative;
            border: 1px solid #0146AB;
            transition: all 0.5s;
          }

          .submit-btn:hover, .contact-btn:hover {
            background: #fff;
            color: #0146AB;
          }
        }
      }
    }
  }

  .right-container {
    width: 50%;

    .youtube-container {
      height: 36vh;
      margin: 32px 0;

      .youtube-box {
        width: 100%;
        height: 100%;
      }
    }
  }
}

.premi-checked-container.hide, .premi-checked-description.hide, .premi-checked-table.hide, .contact-container.hide {
  display: none;
}

.premi-checked-container {
  padding: 104px 32px 0;
  display: flex;
  justify-content: space-between;

  .left-container {
    width: 40%;

    .left-content {
      border-top: 8px solid #0146AB;
      background: #0146AB;
      border-radius: 0 0 16px 16px;

      .benefit-box {
        background: #fff;
        border-radius: 0 0 16px 16px;
        padding: 16px 32px 48px;

        .prixa-benefit-box {
          width: 96px;

          img {
            width: 100%;
          }
        }

        .title-head {
          margin: 24px 0 8px;
          font-size: clamp(1rem, 1.191vw, 1.29rem); // 14px, 18.0079px, 18.06px
          font-weight: 700;
          color: #0146AB;
        }

        .description {
          font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
          font-weight: 400;
        }
      }

      .saving-content {
        padding: 32px 24px 82px 24px;
        position: relative;

        .saving-label {
          color: #fff;
          font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
          font-weight: 400;
        }

        .arrow-bend-box {
          position: absolute;
          right: 136px;
          bottom: 46px;
          width: 36px;

          img {
            width: 100%;
          }
        }

        .percent-box {
          position: absolute;
          right: 24px;
          bottom: 12px;
          // width: 89px;
          color: #fff;
          font-size: 40px;
          font-weight: 700;
        }
      }
    }
  }

  .middle-container {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;

    .middle-content {
      .equal-text {
        font-size: clamp(5rem, 8.58vw, 9.2rem); // 70px, 128.014px, 128.8px
        font-weight: 400;
      }
    }
  }

  .right-container {
    width: 40%;
    box-shadow: 0px 4px 8px rgba(76, 79, 84, 0.16);
    border-radius: 0 0 16px 16px;
    position: relative;

    .right-content {
      border-top: 8px solid #0146AB;
      position: relative;
      z-index: 1;

      .fact-box {
        padding: 16px 32px 0;

        .fact-image-box {
          width: 96px;

          img {
            width: 100%;
          }
        }
      }

      .title-head {
        margin: 24px 0 8px;
        font-size: clamp(1rem, 1.191vw, 1.29rem); // 14px, 18.0079px, 18.06px
        font-weight: 700;
        color: #0146AB;
      }

      .description {
        font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
        font-weight: 400;
      }
    }

    .icon-box {
      width: 68px;
      position: absolute;
      right: 32px;
      bottom: 32px;

      img {
        width: 100%;
      }
    }

    .circle-fact {
      width: 189px;
      position: absolute;
      right: 0;
      bottom: 0;

      img {
        width: 100%;
      }
    }
  }
}

.premi-checked-description {
  margin: 96px 0;

  .description-text {
    text-align: center;
    font-size: clamp(0.86rem, 1.06vw, 1.145rem); // 12.04px, 16.0272px, 16.03px
    font-weight: 400;
  }
}

.premi-checked-table {
  padding: 0 32px;
  position: relative;
  overflow: scroll;

  .background-blur {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 57%;

    &.blur {
      backdrop-filter: blur(2.5px);
      background: linear-gradient(180.23deg, rgba(255, 255, 255, 0.75) 34%, rgba(255, 255, 255, 0) 126.2%);
      transform: rotate(-180deg);
    }
  }

  .table-container {
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #E9ECEF;

    .table-row {
      border-bottom: 1px solid #E9ECEF;

      .col-1 {
        width: 20%;
        padding: 20px 32px;
        background: #E2EAF4;
        font-size: 14px;
        font-weight: 700;
      }

      .col-2, .col-3, .col-4 {
        text-align: right;
        padding: 20px 32px;
        font-size: 14px;
        font-weight: 400;
      }
    }
  }
}

.contact-container {
  margin-top: 67px;
  text-align: center;

  .contact-box {
    margin-top: 48px;

    .contact-btn {
      padding: 16px 24px;
      color: #fff;
      font-size: clamp(0.86rem, 0.927vw, 1rem);
      font-weight: 700;
      background: #0146AB;
      display: inline-block;
      border-radius: 8px;
      cursor: pointer;
      position: relative;
      border: 1px solid #0146AB;
      transition: all 0.5s;
    }

    .contact-btn:hover {
      background: #fff;
      color: #0146AB;
    }
  }
}

@media screen and (max-width: 768px) {
  .calculator-container {
    padding: 32px 24px;
  }

  .label-header-content {
    padding: 0;
  }

  .calculator-content {
    flex-direction: column;
    gap: 32px;
    padding: 0;

    .left-container {
      width: 100%;
      padding-left: 0;

      .calculator-form-box {
        .form-content {
          .form-item {
            .check-ration-box {
              padding-left: 0;

              .check-ratio {
                font-size: 12px;
              }
            }
          }
        }
      }
    }

    .right-container {
      width: 100%;
      order: -1;

      .youtube-container {
        height: 50vw;
        min-width: 327px;
        min-height: 187.5px;
        margin: 0;
      }
    }
  }

  .premi-checked-container {
    padding: 72px 0 0;
    flex-direction: column;

    .left-container {
      width: 100%;

      .left-content {
        .benefit-box {
          .prixa-benefit-box {
            width: 64px;
          }
        }

        .saving-content {
          padding: 24px 16px 64px;

          .arrow-bend-box {
            width: 28px;
            right: 100px;
            bottom: 32px;
          }

          .percent-box {
            font-size: 32px;
            right: 16px;
          }
        }
      }
    }

    .middle-container {
      width: 100%;
    }

    .right-container {
      width: 100%;
      height: 331px;

      .right-content {
        .fact-box {
          padding: 16px 24px 0;
          .fact-image-box {
            width: 64px;
          }
        }
      }

      .icon-box {
        width: 32px;
        bottom: 24px;
        right: 24px;
      }

      .circle-fact {
        width: 124px;
      }
    }
  }

  .premi-checked-description {
    margin: 32px 0;
  }

  .premi-checked-table {
    padding: 0;
  }

  .contact-container {
    margin-top: 32px;

    .contact-box {
      margin-top: 16px;
    }
  }
}
</style>

<style lang="less">
.form-content {
  .form-item {
    .item-inpu-number-box {
      .item-input-number {
        .ant-input-number-handler-wrap {
          border-radius: 8px;
        }
      }
    }
  }
}

.ant-slider-tooltip .ant-tooltip-inner {
  background-color: #0146AB;
}
</style>

<template>
    <div>
        <div v-if="!route" class="button-component" @click="handleClick" :class="{'has-icon':!!icon,'has-label':!!label}" :style="style" @mouseover="hover = true" @mouseleave="hover=false">
            <div class="wrapper">
                <div class="icon" v-if="!!icon">
                    <i :class="[icon]"></i>
                </div>
                <div class="text">
                    {{label}}
                </div>
            </div>
        </div>
        <router-link v-if="!!route" :to="route" tag="div" class="button-component" :class="{'has-icon':!!icon,'has-label':!!label}" :style="style" @mouseover.native="hover = true" @mouseleave.native="hover=false">
            <div class="wrapper">
                <div class="icon" v-if="!!icon">
                    <i :class="[icon]"></i>
                </div>
                <div class="text" v-if="label">
                    {{label}}
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
  props: {
    icon: {
      type: String
    },
    label: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    outline: {
      type: Boolean
    },
    block: {
      type: Boolean
    },
    route: {},
    state: {
      type: String,
      default: "primary",
      validator: val => {
        return [
          "primary",
          "secondary",
          "success",
          "danger",
          "warning",
          "info"
        ].includes(val.toLowerCase());
      }
    }
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  },
  data() {
    return {
      hover: false,
      constants: {
        COLORS: {
          PRIMARY: "#007bff",
          SECONDARY: "#6c757d",
          SUCCESS: "#28a745",
          DANGER: "#dc3545",
          WARNING: "#ffc107",
          INFO: "#17a2b8"
        }
      }
    };
  },
  computed: {
    color() {
      return this.constants.COLORS[this.state.toUpperCase()];
    },
    cls() {
      let tmp = this.state;
      if (this.outline) tmp += " outline";
      return tmp;
    },
    style() {
      let tmp = {
        color: "white",
        borderColor: this.color,
        backgroundColor: "white"
      };

      if (this.outline) {
        if (this.hover) {
          tmp.color = "white";
          tmp.backgroundColor = this.color;
        } else {
          tmp.color = this.color;
          tmp.backgroundColor = "white";
        }
      } else {
        tmp.color = "white";
        tmp.backgroundColor = this.color;
      }
      return tmp;
    }
  }
};
</script>
<style lang="scss" scoped>
$btn-color-primary: #007bff;
.button-component {
  color: $btn-color-primary;
  border: 1px solid $btn-color-primary;
  cursor: pointer;
  display: inline-block;
  height: 50px;
  padding: 0px 1.6rem;
  //border-radius: 4px;
  .wrapper {
    height: 100%;
    display: flex;
    flex-direction: row;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    .icon {
      flex-basis: 40px;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .text {
      flex-basis: 100%;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  &.has-icon {
    &.has-label {
      .wrapper {
        .text {
          padding-left: 4px;
        }
      }
    }
    &:not(.has-label) {
      //border-radius: 50%;
      padding: 0 6px;
      .wrapper {
        .icon {
          font-size: 2.6rem;
        }
      }
    }
  }
}
</style>

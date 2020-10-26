#include "esphome.h"
using namespace esphome;

class IFan03Output : public Component, public FloatOutput {
  public:
    void write_state(float state) override {
      if (state < 0.3) {
        // OFF
        digitalWrite(14, LOW);
        digitalWrite(12, LOW);
        digitalWrite(15, LOW);
      } else if (state < 0.6) {
        // low speed
        digitalWrite(14, HIGH);
        digitalWrite(12, LOW);
        digitalWrite(15, LOW);
      } else if (state < 0.9) {
        // medium speed
        digitalWrite(14, HIGH);
        digitalWrite(12, HIGH);
        digitalWrite(15, LOW);
      } else {
        // high speed
        digitalWrite(14, HIGH);
        digitalWrite(12, LOW);
        digitalWrite(15, HIGH);
      }
    }
};
input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.on()
    I2C_LCD1602.BacklightOn()
    I2C_LCD1602.ShowString("ESTACION KKQ-LO", 0, 0)
    I2C_LCD1602.ShowString("T:", 0, 1)
    I2C_LCD1602.ShowString("H:", 8, 1)
    I2C_LCD1602.ShowNumber(Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P0), 2, 1)
    basic.pause(1000)
    I2C_LCD1602.ShowNumber(Environment.dht11value(Environment.DHT11Type.DHT11_humidity, DigitalPin.P0), 10, 1)
    basic.pause(1000)
    basic.showString("" + (Environment.dht11value(Environment.DHT11Type.DHT11_temperature_C, DigitalPin.P0)))
    basic.pause(5000)
    I2C_LCD1602.clear()
    I2C_LCD1602.off()
    I2C_LCD1602.BacklightOff()
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.off()
I2C_LCD1602.BacklightOff()
basic.forever(function () {
	
})

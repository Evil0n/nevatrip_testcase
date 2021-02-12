import { Form, Select, Input, InputNumber, Button, Modal } from 'antd'
import { useCallback, useState, useMemo } from 'react'
import moment from 'moment'

const { Option } = Select
const { Item } = Form
const { Group } = Input

const directions = [
  {value: '_to', label: 'Туда'},
  {value: '_back', label: 'Обратно'},
  {value: '_toAndBack', label: 'Туда и обратно'}
]

const prices = {
  _to: 700,
  _back: 700,
  _toAndBack: 1200,
}

const time = {
  _to: [
    {value: 18*60, label: '18:00'},
    {value: 18*60 + 30, label: '18:30'},
    {value: 18*60 + 45, label: '18:45'},
    {value: 19*60, label: '19:00'},
    {value: 19*60 + 15, label: '19:15'},
    {value: 21*60, label: '21:00'}
  ],
  _back: [
    {value: 18*60 + 30, label: '18:30'},
    {value: 18*60 + 45, label: '18:45'},
    {value: 19*60, label: '19:00'},
    {value: 19*60 + 15, label: '19:15'},
    {value: 19*60 + 35, label: '19:35'},
    {value: 21*60 + 50, label: '21:50'},
    {value: 21*60 + 55, label: '21:55'}
  ]
}

const formInitial = {
  direction: '_to',
  time: {
    _to: 18*60,
    _back: 19*60
  },
  count: 1
}

export default function Index() {
  const [direction, setDirection] = useState(formInitial.direction)
  const [to, setTo] = useState(formInitial.time._to)
  const [back, setBack] = useState(formInitial.time._back)

  const getToStyle = useMemo(() => {
    const isVisible = direction === '_to' || direction === '_toAndBack'
    return { display: isVisible ? 'inline-block' : 'none'}
  }, [direction])

  const getBackStyle = useMemo(() => {
    const isVisible = direction === '_back' || direction === '_toAndBack'
    return { display: isVisible ? 'inline-block' : 'none'}
  }, [direction])

  const handleChange = useCallback((changedValues) => {
    if (changedValues.direction) {
      setDirection(changedValues.direction)
    }
    if (changedValues.time?._to) {
      setTo(changedValues.time._to)

      if (direction === '_toAndBack' && changedValues.time._to + 50 >= back) {
        form.setFieldsValue({
          time: {
            _back: time._back.find(option => option.value > changedValues.time._to + 50).value
          }
        })
      }
    }
    if (changedValues.time?._back) {
      setBack(changedValues.time._back)
    }
  }, [direction, back])

  const handleSubmit = useCallback(values => {
    const departureTo = moment()
    departureTo.set({hour:0,minute:0,second:0,millisecond:0})
    departureTo.add(values.time._to, 'minutes')
    const departureBack = moment()
    departureBack.set({hour:0,minute:0,second:0,millisecond:0})
    departureBack.add(values.time._back, 'minutes')

    const msgTo = (where, departure, isNeedToRender) => {
      if (!isNeedToRender) { return }
      return `Теплоход отправляется ${where} в ${departure.format('HH-mm')}, а прибудет в ${departure.add(50, 'minutes').format('HH-mm')}.`
    }

    Modal.success({
      title: `Вы выбрали ${values.count} бил. по маршруту из A в B стоимостью ${prices[values.direction] * values.count}р.`,
      content: (<>
        Это путешествие займет у вас {values.direction === '_toAndBack' ? 100 : 50} мин. <br/>
        {msgTo('в сторону А', departureTo,  ['_toAndBack', '_to'].includes(values.direction) )} <br/>
        {msgTo('в сторону Б', departureBack, ['_toAndBack', '_back'].includes(values.direction))} <br/>
        <div style={{color: 'red'}}>!! Внимание время указано в Московском часовом поясе (+3 GMT)</div>
      </>)
    })
  }, [])

  const [form] = Form.useForm()
  return <Form
    form={form}
    labelCol={{ span: 4 }}
    wrapperCol={{ span: 14 }}
    layout="horizontal"
    initialValues={formInitial}
    onValuesChange={handleChange}
    onFinish={handleSubmit}
  >
    <Item label="Направление" name="direction">
      <Select>
        {directions.map(direction => (
          <Option key={'direction' + direction.value} value={direction.value}>{direction.label}</Option>
        ))}
      </Select>
    </Item>
    <Item label="Время">
      <Group compact>
        <Item name={['time', '_to']} label="Туда" style={getToStyle}>
          <Select>
            {time._to.map(direction => (
              <Option key={'timeTo' + direction.value} value={direction.value}>{direction.label}</Option>
            ))}
          </Select>
        </Item>
        <Item name={['time', '_back']} label="Обратно" style={getBackStyle}>
          <Select>
            {time._back.map(directionOption => (
              <Option
                key={'timeBack' + directionOption.value}
                value={directionOption.value}
                disabled={directionOption.value <= (to + 50) && direction === '_toAndBack'}
              >
                {directionOption.label}
              </Option>
            ))}
          </Select>
        </Item>
      </Group>
    </Item>
    <Item label="Количество" name="count">
      <InputNumber min={1} />
    </Item>
    <Item wrapperCol={{ offset: 4 }}>
      <Button type="primary" htmlType="submit">
        Посчитать
      </Button>
    </Item>
  </Form>
}

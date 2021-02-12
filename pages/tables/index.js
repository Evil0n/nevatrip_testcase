import { Table } from 'antd'

const priceSource = [
  {
    key: 1,
    id: '1',
    type: 'взрослый',
    price: '700',
    status: 'активна',
    created_at: '12.02.2021',
  },
  {
    key: 2,
    id: '2',
    type: 'детский',
    price: '450',
    status: 'активна',
    created_at: '12.02.2021',
  },
  {
    key: 3,
    id: '3',
    type: 'взрослый',
    price: '1000',
    status: 'отключен',
    created_at: '12.02.2021',
  },
  {
    key: 4,
    id: '4',
    type: 'детский',
    price: '800',
    status: 'отключен',
    created_at: '12.02.2021',
  },
  {
    key: 5,
    id: '5',
    type: 'льготный',
    price: '449',
    status: 'активна',
    created_at: '12.02.2021',
  },
  {
    key: 5,
    id: '5',
    type: 'групповой',
    price: '600',
    status: 'активна',
    created_at: '12.02.2021',
  },

]
const priceColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'id',
  }, {
    title: 'тип',
    dataIndex: 'type',
    key: 'type',
  }, {
    title: 'цена',
    dataIndex: 'price',
    key: 'price',
  }, {
    title: 'статус',
    dataIndex: 'status',
    key: 'status',
  }, {
    title: 'дата создания',
    dataIndex: 'created_at',
    key: 'created_at',
  },
]
const orderSource = [
  {
    key: 'order_1',
    id: '1',
    created_at: '12.02.2021',
  },
  {
    key: 'order_2',
    id: '2',
    created_at: '12.02.2021',
  },

]
const orderColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'order_id',
  }, {
    title: 'дата заказа',
    dataIndex: 'created_at',
    key: 'order_create_at',
  },
]
const ticketSource = [
  {
    key: 'ticket_1',
    id: '1',
    price_id: '1',
    order_id: '1',
    session_id:'3',
    barcode:'111111',
    ticket_status:'активен'
  },{
    key: 'ticket_2',
    id: '2',
    price_id: '4',
    order_id: '2',
    session_id:'6',
    barcode:'222222',
    ticket_status:'использован'
  },{
    key: 'ticket_3',
    id: '3',
    price_id: '4',
    order_id: '2',
    session_id:'6',
    barcode:'333333',
    ticket_status:'использован'
  },{
    key: 'ticket_4',
    id: '4',
    price_id: '1',
    order_id: '3',
    session_id:'3',
    barcode:'444444',
    ticket_status:'активен'
  },{
    key: 'ticket_5',
    id: '5',
    price_id: '1',
    order_id: '3',
    session_id:'3',
    barcode:'555555',
    ticket_status:'использован'
  },{
    key: 'ticket_6',
    id: '6',
    price_id: '1',
    order_id: '3',
    session_id:'3',
    barcode:'666666',
    ticket_status:'активен'
  },{
    key: 'ticket_7',
    id: '7',
    price_id: '1',
    order_id: '3',
    session_id:'3',
    barcode:'777777',
    ticket_status:'использован'
  },


]
const ticketColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'ticket_id',
  }, {
    title: 'id прайса',
    dataIndex: 'price_id',
    key: 'ticket_price_id',
  }, {
    title: 'id заказа',
    dataIndex: 'order_id',
    key: 'ticket_order_id',
  }, {
    title: 'id сеанса',
    dataIndex: 'session_id',
    key: 'ticket_session_id',
  }, {
    title: 'баркод',
    dataIndex: 'barcode',
    key: 'ticket_barcode',
  }, {
    title: 'статус билета',
    dataIndex: 'ticket_status',
    key: 'ticket_status',
  },
]
const sessionSource = [
  {
    key: 'session_1',
    id: '3',
    created_at: '12.02.2021 13:00',
  },
  {
    key: 'session_2',
    id: '6',
    created_at: '12.02.2021 18:00',
  },

]
const sessionColumns = [
  {
    title: 'id',
    dataIndex: 'id',
    key: 'session_id',
  }, {
    title: 'дата сессии',
    dataIndex: 'created_at',
    key: 'session_create_at',
  },
]


export default function Index () {
  return <div>
    С предоставленной таблицой будет сложно сделать задание, по этому я решил
    придумать собственную таблицу. <br/>
    Проблемы существующей таблицы <br/>
    1) добавление новых типов билетов приведет к созданию дополнительных
    столбцов, из-за чего таблица станет слишком большой и будет сложно выделить
    что-то одно, будет слишком много данных (зачем например знать что у меня 0
    билетов 10 типов и 1 билет в заказе) <br/>
    2)не понятно как сохранять баркоды для билета, создавать новые строчки
    билетов для одного заказа? <br/>
    3)Так как цена для статистики главное, то ошибки недопустимы и источник
    данных должен быть один что может привести к множественным
    ошибкам.(неправильно посчитанная сумма) <br/>
    4)нет источника цены. Цена может изменятся и так как нет сущности прайса,
    нет уверенности что в данный конкретный момент времени билет был продан за
    нужную цену.
    и т.д потенциальных ошибок хранения всех данных обо всех операциях в одной
    табличке может быть бесконечно из за отсутсвия разделения сущностей. <br/>
    5) в таблице есть event id которое судя по всему определяет событие которое
    включает в себя несколько сеансов как определяется сколько было продано
    билетов на конкретный сеанс?<br/>

    Предлагаемое решение: <br/>
    Разделить на несколько таблиц и описать особенности работы с таблицами. Где
    только одна точка входа это Прайс и в ней никогда ничего нельзя удалить или
    изменить, только добавлять. <br/>
    Например если хочешь изменить цену, добавь новую и скрой старую.
    <h2>Прайс</h2>
    <Table dataSource={priceSource} columns={priceColumns}/>
    <h2>Заказ</h2>
    <Table dataSource={orderSource} columns={orderColumns}/>
    <h2>Билет</h2>
    <Table dataSource={ticketSource} columns={ticketColumns}/>
    <h2>Сеанс</h2>
    <Table dataSource={sessionSource} columns={sessionColumns}/>
    <h2>Статистика</h2>
     Таблица статистики может быть сгенерирована в том же виде что и указано в
    тз на основе данных из предоставленых 4 таблиц. Однако в виду того что я занимался исключительно front-end разработкой и у меня нет базы,

    id - может быть взят из таблицы заказов колонка id <br/>
    event_id - может быть взят из таблицы сеансов колонка id(возможно я ошибаюсь и есть отдельно событие и сеанс, но я за основу взял что есть только сеанс) <br/>
    event_date - из таблицы сеанс колонка дата сессии <br/>
    ticket_adult_price, ticket_kid_price, etc  - из прайса колонка цена ( связь через заказ-билет-прайс-колонка цена(если несколько цен, то с учетом того что в прайсе цена уникальна, не изменяется и не удаляется, то ничего не разъедется)) <br/>
    ticket_adult_quantity,ticket_kid_quantity -  связь заказ-билет подсчитать количество с одинаковым типом и записать в колонку с именем которое можно взять из таблицы прайса - колонка тип <br/>
    barcode из таблицы билет колнка баркод <br/>
    equal_price - высчитывается из колонки билетов (связь заказ -билет- прайс) берем id заказа- ищем по ним билеты- по связи билет - прайс -колонка цены находим цены и складываем. <br/>
    created - таблица заказ колонка дата заказа <br/>
    Вопрос 1 <br/><br/><br/>
    новые типы билетов указаны в таблице прайс
    <br/><br/><br/>
    Вопрос 2<br/><br/><br/>
    в таблице билетов есть колонка статуса и она никак не привязана к заказу, только к билету.  </div>
}

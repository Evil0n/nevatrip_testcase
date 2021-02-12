export default function Home() {
  return (<div>
    <div><h1 id="markdown-header-">Тестовое задание</h1>
      <p>Это тестовое задание не имеет никаких технических ограничений.
        Ты можешь использовать любые инструменты. </p>
      <h3 id="markdown-header-1">1. Билеты на событие</h3>
      <p>После успешной покупки билетов на событие, данные попадают в список
        заказов.
        Список заказов сохраняется в таблице phpMyAdmin в виде:</p>
      <table>
        <thead>
        <tr>
          <th>id</th>
          <th>event_id</th>
          <th>event_date</th>
          <th>ticket_adult_price</th>
          <th>ticket_adult_quantity</th>
          <th>ticket_kid_price</th>
          <th>ticket_kid_quantity</th>
          <th>barcode</th>
          <th>user_id</th>
          <th>equal_price</th>
          <th>created</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>1</td>
          <td>003</td>
          <td>2021-08-21 13:00:00</td>
          <td>700</td>
          <td>1</td>
          <td>450</td>
          <td>0</td>
          <td><a
            href="https://bitbucket.org/nevatrip/test-task/commits/11111111"
            rel="nofollow" className="ap-connect-link">11111111</a></td>
          <td>00451</td>
          <td>700</td>
          <td>2021-01-11 13:22:09</td>
        </tr>
        <tr>
          <td>2</td>
          <td>006</td>
          <td>2021-07-29 18:00:00</td>
          <td>1000</td>
          <td>0</td>
          <td>800</td>
          <td>2</td>
          <td><a
            href="https://bitbucket.org/nevatrip/test-task/commits/22222222"
            rel="nofollow" className="ap-connect-link">22222222</a></td>
          <td>00364</td>
          <td>1600</td>
          <td>2021-01-12 16:62:08</td>
        </tr>
        <tr>
          <td>3</td>
          <td>003</td>
          <td>2021-08-15 17:00:00</td>
          <td>700</td>
          <td>4</td>
          <td>450</td>
          <td>3</td>
          <td><a
            href="https://bitbucket.org/nevatrip/test-task/commits/33333333"
            rel="nofollow" className="ap-connect-link">33333333</a></td>
          <td>00015</td>
          <td>4150</td>
          <td>2021-01-13 10:08:45</td>
        </tr>
        </tbody>
      </table>
      <p>Где:</p>
      <ul>
        <li><code>id</code> - инкрементальный порядковый номер заказа</li>
        <li><code>event_id</code> - уникальный ид события. У каждого события
          есть свое название, описание, расписание, цены и свой
          уникальный <code>event_id</code> соответственно
        </li>
        <li><code>event_date</code> - дата и время на которое были куплены
          билеты
        </li>
        <li><code>ticket_adult_price</code> - цена взрослого билета на момент
          покупки
        </li>
        <li><code>ticket_adult_quantity</code> - количество купленных взрослых
          билетов в этом заказе
        </li>
        <li><code>ticket_kid_price</code> - цена детского билета на момент
          покупки
        </li>
        <li><code>ticket_kid_quantity</code> - количество купленных детских
          билетов в этом заказе
        </li>
        <li><code>barcode</code> уникальный штрих код заказа</li>
        <li><code>equal_price</code> - общая сумма заказа</li>
        <li><code>created</code> - дата создания заказа</li>
      </ul>
      <p>Вопросы:</p>
      <ol>
        <li>Некоторые события нужно продавать с дополнительными типами билетов -
          льготный и групповой, у которых будут свои цены и название.
          Имеется информация, что вероятно, будут другие типы билетов, которые
          нужно будет добавить.
          Нужно уметь сохранять при заказе 2 дополнительных типа билета,
          льготный и групповой в бд.
          <strong>Задача</strong> - Показать конечный вид таблицы с добавленными
          типами билетов. Объяснить свое решение.
        </li>
        <li>Часто посетители из одного заказа приходят не одновременно на
          события.
          Возникает необходимость чекинить их по отдельности.
          Для этого у каждого билета должен быть свой баркод.
          Если в одном заказе было куплено несколько билетов, 2 взрослых, 3
          детских, 4 льготных - то должно быть 9 баркодов для каждого билета
          соответственно.
          <strong>Задача</strong> - Показать конечный вид таблицы, где у каждого
          билета свой баркод. Объяснить свое решение.
        </li>
      </ol>
      <h3 id="markdown-header-2-a-b">2. Время из A в B</h3>
      <p>Известно расписание отправления теплохода по московскому времени
        (GMT+3):</p>
      <ul>
        <li>
          <p>из A в B:</p>
          <ul>
            <li>2021-08-21 18:00:00</li>
            <li>2021-08-21 18:30:00</li>
            <li>2021-08-21 18:45:00</li>
            <li>2021-08-21 19:00:00</li>
            <li>2021-08-21 19:15:00</li>
            <li>2021-08-21 21:00:00</li>
          </ul>
        </li>
        <li>
          <p>из B в A:</p>
          <ul>
            <li>2021-08-21 18:30:00</li>
            <li>2021-08-21 18:45:00</li>
            <li>2021-08-21 19:00:00</li>
            <li>2021-08-21 19:15:00</li>
            <li>2021-08-21 19:35:00</li>
            <li>2021-08-21 21:50:00</li>
            <li>2021-08-21 21:55:00</li>
          </ul>
        </li>
      </ul>
      <p>"из A в B" и "из B в A" стоимость одного билета 700р.</p>
      <p>"из A в B и обратно в А" стоимость составного билета 1200р</p>
      <p>Время пути в одну сторону 50 минут.</p>
      <p><strong>Задача.</strong>
        Сделать страницу (дизайн не имеет значения) на которой пользователь
        выбрав направление, время и количество билетов сможет посчитать итоговые
        значения: общую стоимость, время в пути.</p>
      <p>Как это должно выглядеть?</p>
      <p>На странице пользователь сначала должен выбрать направление:</p>
      <div className="codehilite"><pre><span></span><span
        className="nt">&lt;select</span> <span className="na">name=</span><span
        className="s">"route"</span> <span className="na">id=</span><span
        className="s">"route"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"из A в B"</span><span className="nt">&gt;</span>из A в B<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"из B в A"</span><span className="nt">&gt;</span>из B в A<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"из A в B и обратно в А"</span><span
          className="nt">&gt;</span>из A в B и обратно в А<span
          className="nt">&lt;/option&gt;</span>
<span className="nt">&lt;/select&gt;</span>
</pre>
      </div>


      <p>После чего предлагается пользователю выбрать время.
        Важно, время показываем в часовом поясе пользователя.
        Предположим, что на всех его устройствах стоит запрет перевода времени в
        локальный часовой пояс.</p>
      <div className="codehilite"><pre><span></span><span
        className="nt">&lt;label</span> <span className="na">for=</span><span
        className="s">"time"</span><span className="nt">&gt;</span>Выберите время<span
        className="nt">&lt;/label&gt;</span>
<span className="nt">&lt;select</span> <span className="na">name=</span><span
          className="s">"time"</span> <span className="na">id=</span><span
          className="s">"time"</span><span className="nt">&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"18:00(из A в B)"</span><span className="nt">&gt;</span>18:00(из A в B)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"18:30(из A в B)"</span><span className="nt">&gt;</span>18:30(из A в B)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"18:45(из A в B)"</span><span className="nt">&gt;</span>18:45(из A в B)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"19:00(из A в B)"</span><span className="nt">&gt;</span>19:00(из A в B)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"19:15(из A в B)"</span><span className="nt">&gt;</span>19:15(из A в B)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"21:00(из A в B)"</span><span className="nt">&gt;</span>21:00(из A в B)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"18:30(из B в A)"</span><span className="nt">&gt;</span>18:30(из B в A)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"18:45(из B в A)"</span><span className="nt">&gt;</span>18:45(из B в A)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"19:00(из B в A)"</span><span className="nt">&gt;</span>19:00(из B в A)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"19:15(из B в A)"</span><span className="nt">&gt;</span>19:15(из B в A)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"19:35(из B в A)"</span><span className="nt">&gt;</span>19:35(из B в A)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"21:50(из B в A)"</span><span className="nt">&gt;</span>21:50(из B в A)<span
          className="nt">&lt;/option&gt;</span>
  <span className="nt">&lt;option</span> <span className="na">value=</span><span
          className="s">"21:55(из B в A)"</span><span className="nt">&gt;</span>21:55(из B в A)<span
          className="nt">&lt;/option&gt;</span>
<span className="nt">&lt;/select&gt;</span>
</pre>
      </div>


      <p>Если выбрано время "из A в B и обратно в А", то должен показаться
        дополнительный селект, в котором можно будет выбрать обратное время.
        Обратите внимание, что время не должно пересекаться. Это значит,
        что следует учитывать, что если путь из А в В был выбран в 14:00, то
        обратный путь возможен только по прибытию на место в пункт В. </p>
      <p>Далее ползователю прелагается выбрать количество билетов и нажать на
        кнопку "посчитать".</p>
      <div className="codehilite"><pre><span></span><span
        className="nt">&lt;label</span> <span className="na">for=</span><span
        className="s">"num"</span><span className="nt">&gt;</span>Количество билетов<span
        className="nt">&lt;/label&gt;</span>
<span className="nt">&lt;input</span> <span className="na">id=</span><span
          className="s">"num"</span><span className="nt">&gt;</span>
<span className="nt">&lt;button&gt;</span>Посчитать<span
          className="nt">&lt;/button&gt;</span>
</pre>
      </div>


      <p>При клике на кнопку "Посчитать" показать результат с направлением,
        временем в пути, временем отправления и временем прибытия в часовом
        поясе пользователя. </p>
      <p>Например:</p>
      <div className="codehilite"><pre><span></span>Вы выбрали 4 билета по маршруту из A в B стоимостью 4000р.
Это путешествие займет у вас 40 минут.
Теплоход отправляется в 12-00, а прибудет в 18-00.
</pre>
      </div>
    </div>
  </div>)
}

export default function FeedSwitcher(){
    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input onClick={location.href = 'http://www.yandex.ru/'} type="radio" className="btn-check togglerElem" name="btnradio" id="btnradio1" autocomplete="off"/>
            <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

            <input onClick={location.href = 'https://www.google.com/search?q=%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4+%D0%BF%D0%BE+%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B5+js&oq=%D0%BF%D0%B5%D1%80%D0%B5%D1%85%D0%BE%D0%B4+%D0%BF%D0%BE+%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B5+js&aqs=chrome..69i57j0i22i30l3j0i15i22i30j0i22i30l3.5167j0j1&sourceid=chrome&ie=UTF-8'} type="radio" className="btn-check togglerElem" name="btnradio" id="btnradio2" autocomplete="off" />
            <label className="btn btn-outline-primary" for="btnradio2">Radio 2</label>

            <input onClick={location.href = '#'} type="radio" className="btn-check togglerElem" name="btnradio" id="btnradio3" autocomplete="off" />
            <label className="btn btn-outline-primary" for="btnradio3">Radio 3</label>
        </div>
    );
}
export default function FeedSwitcher(){
    return (
        <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input onClick={location.href = 'http://www.yandex.ru/'} type="radio" className="btn-check togglerElem" name="btnradio" id="btnradio1" autocomplete="off" />
            <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>
        </div>
    );
}
import React from "react";

export default class NotFoundPage extends React.Component {
    render() {
        return <div className="col-sm-offset-3 col-sm-6" style="text-align: center;">
            <h1 style="margin: 20px 0px 10px 0px;">Страница не найдена</h1>
            <br />
            То, что вы ищете, не здесь.
            <br />
            <a href="{{ url_for('index') }}">Сходите куда-нибудь еще</a>
        </div>;
    }
}
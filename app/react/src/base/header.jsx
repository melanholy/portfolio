import React from 'react';

export default class Header extends React.Component {
    render() {
        return <header className="container">
            <img src="/stats?path={{ request.path }}" width="300" height="34" alt="Статистика посещений" style="margin-bottom: 2px;" />
            <ul>
                <li><a href="/">Обо мне</a></li><!--
                 --><li><a href="/skills">Навыки</a></li><!--
                 --><li><a href="/gallery">Картиночки</a></li><!--
                 --><li><a href="/stuff">Штуки</a></li><!--
                    {% if current_user.is_authenticated %}
                 --><li><a href="/user"><!--{{ current_user.username }}--></a></li><!--
                    <li style="width: 35px;"><a href="/logout">[x]</a></li>
                    {% else %}
                    <li><a href="/login">Войти</a></li>
                    {% endif %}-->
            </ul>
        </header>;
    }
}
import React, { useContext } from "react";
import Header from "../components/Header";
import Checkbox from "../components/ui/Checkbox";
import Context from "../Context";
import Page from "./Page";

const SettingsPage: React.FC = ()=> {

    const { config, setConfig } = useContext(Context);
    
    return (
        <Page>

            <Header title="Настройки" back hide_nav />

            <div className="ph-3">

                <div className="as-slot slot gap-2">
                    <Checkbox
                        checked={ config.checked_to_down }
                        onChange={ ()=> setConfig({ ...config, checked_to_down: !config.checked_to_down }) }
                    />
                    <h3>Отображать завершённые заметки внизу</h3>
                </div>

                <div className="as-slot slot gap-2">
                    <Checkbox
                        checked={ config.alarm_on_delete }
                        onChange={ ()=> setConfig({ ...config, alarm_on_delete: !config.alarm_on_delete }) }
                    />
                    <h3>Запрашивать удаление заметок</h3>
                </div>

                <div className="as-slot slot gap-2">
                    <input
                        type="number" className="text-center" style={ { width: 40 } }
                        value={ config.delete_delay }
                        onChange={ e=> setConfig({ ...config, delete_delay: +e.target.value > 0 ? +e.target.value < 30 ? e.target.value[0] == "0" ? e.target.value.slice(1) : e.target.value as any : 30 : 0 }) }
                    />
                    <h3>Автоматически удалять заметки в корзине</h3>
                </div>
                

            </div>

        </Page>
    );
};

export default SettingsPage;
/** 
 * Internationalization (i18n) system for Blue Marble userscript
 * Provides multi-language support with fallback to English
 * @file i18n.js
 * @since 0.86.0
 */

/**
 * Translation data structure
 * Each key contains translations for different languages
 * @type {Object<string, Object<string, string>>}
 */
const translations = {
  // UI Elements
  'ui.move_up': {
    'en': 'Move ↑',
    'zh-cn': '向上移动 ↑',
    'zh-tw': '向上移動 ↑',
    'ja': '上に移動 ↑',
    'ko': '위로 이동 ↑',
    'es': 'Mover ↑',
    'fr': 'Déplacer ↑',
    'de': 'Nach oben ↑',
    'ru': 'Переместить ↑',
    'pt': 'Mover ↑'
  },
  'ui.move_down': {
    'en': 'Move ↓',
    'zh-cn': '向下移动 ↓',
    'zh-tw': '向下移動 ↓',
    'ja': '下に移動 ↓',
    'ko': '아래로 이동 ↓',
    'es': 'Mover ↓',
    'fr': 'Déplacer ↓',
    'de': 'Nach unten ↓',
    'ru': 'Переместить ↓',
    'pt': 'Mover ↓'
  },
  'ui.username': {
    'en': 'Username:',
    'zh-cn': '用户名：',
    'zh-tw': '使用者名稱：',
    'ja': 'ユーザー名：',
    'ko': '사용자명:',
    'es': 'Usuario:',
    'fr': 'Nom d\'utilisateur:',
    'de': 'Benutzername:',
    'ru': 'Имя пользователя:',
    'pt': 'Nome de usuário:'
  },
  'ui.droplets': {
    'en': 'Droplets:',
    'zh-cn': '水滴：',
    'zh-tw': '水滴：',
    'ja': 'ドロップレット：',
    'ko': '드롭렛:',
    'es': 'Gotas:',
    'fr': 'Gouttelettes:',
    'de': 'Tröpfchen:',
    'ru': 'Капли:',
    'pt': 'Gotas:'
  },
  'ui.next_level': {
    'en': 'Next level in...',
    'zh-cn': '下一级需要...',
    'zh-tw': '下一級需要...',
    'ja': '次のレベルまで...',
    'ko': '다음 레벨까지...',
    'es': 'Siguiente nivel en...',
    'fr': 'Niveau suivant dans...',
    'de': 'Nächstes Level in...',
    'ru': 'Следующий уровень через...',
    'pt': 'Próximo nível em...'
  },
  'ui.upload_template': {
    'en': 'Upload Template',
    'zh-cn': '上传模板',
    'zh-tw': '上傳模板',
    'ja': 'テンプレートをアップロード',
    'ko': '템플릿 업로드',
    'es': 'Subir Plantilla',
    'fr': 'Télécharger le Modèle',
    'de': 'Vorlage Hochladen',
    'ru': 'Загрузить Шаблон',
    'pt': 'Carregar Modelo'
  },
  'ui.enable': {
    'en': 'Enable',
    'zh-cn': '启用',
    'zh-tw': '啟用',
    'ja': '有効にする',
    'ko': '활성화',
    'es': 'Habilitar',
    'fr': 'Activer',
    'de': 'Aktivieren',
    'ru': 'Включить',
    'pt': 'Ativar'
  },
  'ui.disable': {
    'en': 'Disable',
    'zh-cn': '禁用',
    'zh-tw': '禁用',
    'ja': '無効にする',
    'ko': '비활성화',
    'es': 'Deshabilitar',
    'fr': 'Désactiver',
    'de': 'Deaktivieren',
    'ru': 'Отключить',
    'pt': 'Desativar'
  },
  'ui.create': {
    'en': 'Create',
    'zh-cn': '创建',
    'zh-tw': '建立',
    'ja': '作成',
    'ko': '생성',
    'es': 'Crear',
    'fr': 'Créer',
    'de': 'Erstellen',
    'ru': 'Создать',
    'pt': 'Criar'
  },
  'ui.enable_all': {
    'en': 'Enable All',
    'zh-cn': '全部启用',
    'zh-tw': '全部啟用',
    'ja': 'すべて有効',
    'ko': '모두 활성화',
    'es': 'Habilitar Todo',
    'fr': 'Tout Activer',
    'de': 'Alle Aktivieren',
    'ru': 'Включить Все',
    'pt': 'Ativar Todos'
  },
  'ui.disable_all': {
    'en': 'Disable All',
    'zh-cn': '全部禁用',
    'zh-tw': '全部禁用',
    'ja': 'すべて無効',
    'ko': '모두 비활성화',
    'es': 'Deshabilitar Todo',
    'fr': 'Tout Désactiver',
    'de': 'Alle Deaktivieren',
    'ru': 'Отключить Все',
    'pt': 'Desativar Todos'
  },
  'ui.made_by': {
    'en': 'Made by SwingTheVine',
    'zh-cn': '由 SwingTheVine 制作',
    'zh-tw': '由 SwingTheVine 製作',
    'ja': 'SwingTheVine 制作',
    'ko': 'SwingTheVine 제작',
    'es': 'Hecho por SwingTheVine',
    'fr': 'Fait par SwingTheVine',
    'de': 'Erstellt von SwingTheVine',
    'ru': 'Создано SwingTheVine',
    'pt': 'Feito por SwingTheVine'
  },

  // Messages
  'message.enabled_templates': {
    'en': 'Enabled templates!',
    'zh-cn': '已启用模板！',
    'zh-tw': '已啟用模板！',
    'ja': 'テンプレートを有効にしました！',
    'ko': '템플릿이 활성화되었습니다!',
    'es': '¡Plantillas habilitadas!',
    'fr': 'Modèles activés !',
    'de': 'Vorlagen aktiviert!',
    'ru': 'Шаблоны включены!',
    'pt': 'Modelos ativados!'
  },
  'message.disabled_templates': {
    'en': 'Disabled templates!',
    'zh-cn': '已禁用模板！',
    'zh-tw': '已禁用模板！',
    'ja': 'テンプレートを無効にしました！',
    'ko': '템플릿이 비활성화되었습니다!',
    'es': '¡Plantillas deshabilitadas!',
    'fr': 'Modèles désactivés !',
    'de': 'Vorlagen deaktiviert!',
    'ru': 'Шаблоны отключены!',
    'pt': 'Modelos desativados!'
  },
  'message.drew_to_canvas': {
    'en': 'Drew to canvas!',
    'zh-cn': '已绘制到画布！',
    'zh-tw': '已繪製到畫布！',
    'ja': 'キャンバスに描画しました！',
    'ko': '캔버스에 그렸습니다!',
    'es': '¡Dibujado en el lienzo!',
    'fr': 'Dessiné sur la toile !',
    'de': 'Auf Leinwand gezeichnet!',
    'ru': 'Нарисовано на холсте!',
    'pt': 'Desenhado na tela!'
  },
  'message.enabled_all_colors': {
    'en': 'Enabled all colors',
    'zh-cn': '已启用所有颜色',
    'zh-tw': '已啟用所有顏色',
    'ja': 'すべての色を有効にしました',
    'ko': '모든 색상이 활성화됨',
    'es': 'Habilitados todos los colores',
    'fr': 'Toutes les couleurs activées',
    'de': 'Alle Farben aktiviert',
    'ru': 'Включены все цвета',
    'pt': 'Todas as cores ativadas'
  },
  'message.disabled_all_colors': {
    'en': 'Disabled all colors',
    'zh-cn': '已禁用所有颜色',
    'zh-tw': '已禁用所有顏色',
    'ja': 'すべての色を無効にしました',
    'ko': '모든 색상이 비활성화됨',
    'es': 'Deshabilitados todos los colores',
    'fr': 'Toutes les couleurs désactivées',
    'de': 'Alle Farben deaktiviert',
    'ru': 'Отключены все цвета',
    'pt': 'Todas as cores desativadas'
  },

  // Error messages
  'error.coordinates_malformed': {
    'en': 'Coordinates are malformed! Did you try clicking on the canvas first?',
    'zh-cn': '坐标格式错误！您是否尝试先点击画布？',
    'zh-tw': '座標格式錯誤！您是否嘗試先點擊畫布？',
    'ja': '座標が不正です！まずキャンバスをクリックしてみましたか？',
    'ko': '좌표가 잘못되었습니다! 먼저 캔버스를 클릭해 보셨나요?',
    'es': '¡Las coordenadas están mal formadas! ¿Intentaste hacer clic en el lienzo primero?',
    'fr': 'Les coordonnées sont mal formées ! Avez-vous essayé de cliquer sur la toile d\'abord ?',
    'de': 'Koordinaten sind fehlerhaft! Haben Sie zuerst auf die Leinwand geklickt?',
    'ru': 'Координаты неверны! Вы пробовали сначала нажать на холст?',
    'pt': 'As coordenadas estão mal formadas! Você tentou clicar na tela primeiro?'
  },
  'error.no_file_selected': {
    'en': 'No file selected!',
    'zh-cn': '未选择文件！',
    'zh-tw': '未選擇檔案！',
    'ja': 'ファイルが選択されていません！',
    'ko': '파일이 선택되지 않았습니다!',
    'es': '¡No se ha seleccionado ningún archivo!',
    'fr': 'Aucun fichier sélectionné !',
    'de': 'Keine Datei ausgewählt!',
    'ru': 'Файл не выбран!',
    'pt': 'Nenhum arquivo selecionado!'
  },

  // Telemetry
  'telemetry.title': {
    'en': '{name} Telemetry',
    'zh-cn': '{name} 遥测',
    'zh-tw': '{name} 遙測',
    'ja': '{name} テレメトリ',
    'ko': '{name} 텔레메트리',
    'es': 'Telemetría de {name}',
    'fr': 'Télémétrie de {name}',
    'de': '{name} Telemetrie',
    'ru': 'Телеметрия {name}',
    'pt': 'Telemetria do {name}'
  },
  'telemetry.more_info': {
    'en': 'More Information',
    'zh-cn': '更多信息',
    'zh-tw': '更多資訊',
    'ja': '詳細情報',
    'ko': '자세한 정보',
    'es': 'Más Información',
    'fr': 'Plus d\'Informations',
    'de': 'Weitere Informationen',
    'ru': 'Подробнее',
    'pt': 'Mais Informações'
  },
  'telemetry.enable': {
    'en': 'Enable Telemetry',
    'zh-cn': '启用遥测',
    'zh-tw': '啟用遙測',
    'ja': 'テレメトリを有効にする',
    'ko': '텔레메트리 활성화',
    'es': 'Habilitar Telemetría',
    'fr': 'Activer la Télémétrie',
    'de': 'Telemetrie Aktivieren',
    'ru': 'Включить Телеметрию',
    'pt': 'Ativar Telemetria'
  },
  'telemetry.disable': {
    'en': 'Disable Telemetry',
    'zh-cn': '禁用遥测',
    'zh-tw': '禁用遙測',
    'ja': 'テレメトリを無効にする',
    'ko': '텔레메트리 비활성화',
    'es': 'Deshabilitar Telemetría',
    'fr': 'Désactiver la Télémétrie',
    'de': 'Telemetrie Deaktivieren',
    'ru': 'Отключить Телеметрию',
    'pt': 'Desativar Telemetria'
  },
  'telemetry.description': {
    'en': 'We collect anonymous telemetry data such as your browser, OS, and script version to make the experience better for everyone. The data is never shared personally. The data is never sold. You can turn this off by pressing the \'Disable\' button, but keeping it on helps us improve features and reliability faster. Thank you for supporting the Blue Marble!',
    'zh-cn': '我们收集匿名遥测数据，如您的浏览器、操作系统和脚本版本，以为每个人提供更好的体验。数据绝不会被个人分享。数据绝不会被出售。您可以通过按"禁用"按钮来关闭此功能，但保持开启有助于我们更快地改进功能和可靠性。感谢您支持 Blue Marble！',
    'zh-tw': '我們收集匿名遙測資料，如您的瀏覽器、作業系統和腳本版本，以為每個人提供更好的體驗。資料絕不會被個人分享。資料絕不會被出售。您可以透過按「禁用」按鈕來關閉此功能，但保持開啟有助於我們更快地改進功能和可靠性。感謝您支援 Blue Marble！',
    'ja': 'ブラウザ、OS、スクリプトバージョンなどの匿名テレメトリデータを収集して、すべての人により良い体験を提供します。データは個人的に共有されることはありません。データが売られることもありません。「無効」ボタンを押すことでこれをオフにできますが、オンのままにしておくと、機能と信頼性をより速く改善するのに役立ちます。Blue Marbleをサポートしていただき、ありがとうございます！',
    'ko': '브라우저, OS, 스크립트 버전과 같은 익명 텔레메트리 데이터를 수집하여 모든 사람에게 더 나은 경험을 제공합니다. 데이터는 개인적으로 공유되지 않습니다. 데이터는 판매되지 않습니다. \'비활성화\' 버튼을 눌러 이를 끌 수 있지만, 켜두면 기능과 안정성을 더 빠르게 개선하는 데 도움이 됩니다. Blue Marble을 지원해 주셔서 감사합니다!',
    'es': 'Recopilamos datos de telemetría anónimos como su navegador, sistema operativo y versión del script para mejorar la experiencia para todos. Los datos nunca se comparten personalmente. Los datos nunca se venden. Puede desactivar esto presionando el botón \'Deshabilitar\', pero mantenerlo activado nos ayuda a mejorar las características y la confiabilidad más rápido. ¡Gracias por apoyar Blue Marble!',
    'fr': 'Nous collectons des données de télémétrie anonymes telles que votre navigateur, OS et version du script pour améliorer l\'expérience pour tout le monde. Les données ne sont jamais partagées personnellement. Les données ne sont jamais vendues. Vous pouvez désactiver ceci en appuyant sur le bouton \'Désactiver\', mais le garder activé nous aide à améliorer les fonctionnalités et la fiabilité plus rapidement. Merci de soutenir Blue Marble !',
    'de': 'Wir sammeln anonyme Telemetriedaten wie Ihren Browser, Ihr Betriebssystem und die Skriptversion, um die Erfahrung für alle zu verbessern. Die Daten werden niemals persönlich geteilt. Die Daten werden niemals verkauft. Sie können dies deaktivieren, indem Sie die Schaltfläche \'Deaktivieren\' drücken, aber das Eingeschaltetlassen hilft uns, Funktionen und Zuverlässigkeit schneller zu verbessern. Vielen Dank für die Unterstützung von Blue Marble!',
    'ru': 'Мы собираем анонимные телеметрические данные, такие как ваш браузер, ОС и версия скрипта, чтобы улучшить опыт для всех. Данные никогда не передаются лично. Данные никогда не продаются. Вы можете отключить это, нажав кнопку \'Отключить\', но оставление включенным помогает нам быстрее улучшать функции и надежность. Спасибо за поддержку Blue Marble!',
    'pt': 'Coletamos dados de telemetria anônimos como seu navegador, SO e versão do script para melhorar a experiência para todos. Os dados nunca são compartilhados pessoalmente. Os dados nunca são vendidos. Você pode desativar isso pressionando o botão \'Desativar\', mas mantê-lo ativado nos ajuda a melhorar recursos e confiabilidade mais rapidamente. Obrigado por apoiar o Blue Marble!'
  },
  'telemetry.disable_info': {
    'en': 'You can disable telemetry by pressing the "Disable" button below.',
    'zh-cn': '您可以通过按下面的"禁用"按钮来禁用遥测。',
    'zh-tw': '您可以透過按下面的「禁用」按鈕來禁用遙測。',
    'ja': '下の「無効」ボタンを押すことでテレメトリを無効にできます。',
    'ko': '아래 "비활성화" 버튼을 눌러 텔레메트리를 비활성화할 수 있습니다.',
    'es': 'Puede deshabilitar la telemetría presionando el botón "Deshabilitar" a continuación.',
    'fr': 'Vous pouvez désactiver la télémétrie en appuyant sur le bouton "Désactiver" ci-dessous.',
    'de': 'Sie können die Telemetrie deaktivieren, indem Sie unten auf die Schaltfläche "Deaktivieren" klicken.',
    'ru': 'Вы можете отключить телеметрию, нажав кнопку "Отключить" ниже.',
    'pt': 'Você pode desativar a telemetria pressionando o botão "Desativar" abaixo.'
  },

  // Placeholders and help text
  'placeholder.tile_x': {
    'en': 'Tl X',
    'zh-cn': '瓦片 X',
    'zh-tw': '瓦片 X',
    'ja': 'タイル X',
    'ko': '타일 X',
    'es': 'Azulejo X',
    'fr': 'Tuile X',
    'de': 'Kachel X',
    'ru': 'Плитка X',
    'pt': 'Azulejo X'
  },
  'placeholder.tile_y': {
    'en': 'Tl Y',
    'zh-cn': '瓦片 Y',
    'zh-tw': '瓦片 Y',
    'ja': 'タイル Y',
    'ko': '타일 Y',
    'es': 'Azulejo Y',
    'fr': 'Tuile Y',
    'de': 'Kachel Y',
    'ru': 'Плитка Y',
    'pt': 'Azulejo Y'
  },
  'placeholder.pixel_x': {
    'en': 'Px X',
    'zh-cn': '像素 X',
    'zh-tw': '像素 X',
    'ja': 'ピクセル X',
    'ko': '픽셀 X',
    'es': 'Píxel X',
    'fr': 'Pixel X',
    'de': 'Pixel X',
    'ru': 'Пиксель X',
    'pt': 'Pixel X'
  },
  'placeholder.pixel_y': {
    'en': 'Px Y',
    'zh-cn': '像素 Y',
    'zh-tw': '像素 Y',
    'ja': 'ピクセル Y',
    'ko': '픽셀 Y',
    'es': 'Píxel Y',
    'fr': 'Pixel Y',
    'de': 'Pixel Y',
    'ru': 'Пиксель Y',
    'pt': 'Pixel Y'
  },
  'placeholder.status_sleeping': {
    'en': 'Status: Sleeping...\nVersion: {version}',
    'zh-cn': '状态：休眠中...\n版本：{version}',
    'zh-tw': '狀態：休眠中...\n版本：{version}',
    'ja': 'ステータス：スリープ中...\nバージョン：{version}',
    'ko': '상태: 대기 중...\n버전: {version}',
    'es': 'Estado: Durmiendo...\nVersión: {version}',
    'fr': 'Statut: En veille...\nVersion: {version}',
    'de': 'Status: Schlafend...\nVersion: {version}',
    'ru': 'Статус: Спящий режим...\nВерсия: {version}',
    'pt': 'Status: Dormindo...\nVersão: {version}'
  },
  'placeholder.no_template_colors': {
    'en': 'No template colors to display.',
    'zh-cn': '没有模板颜色可显示。',
    'zh-tw': '沒有模板顏色可顯示。',
    'ja': '表示するテンプレートカラーがありません。',
    'ko': '표시할 템플릿 색상이 없습니다.',
    'es': 'No hay colores de plantilla para mostrar.',
    'fr': 'Aucune couleur de modèle à afficher.',
    'de': 'Keine Vorlagenfarben zum Anzeigen.',
    'ru': 'Нет цветов шаблона для отображения.',
    'pt': 'Nenhuma cor de modelo para exibir.'
  },

  // Tooltips and titles
  'tooltip.minimize_maximize': {
    'en': 'Blue Marble Icon - Click to minimize/maximize',
    'zh-cn': 'Blue Marble 图标 - 点击最小化/最大化',
    'zh-tw': 'Blue Marble 圖示 - 點擊最小化/最大化',
    'ja': 'Blue Marble アイコン - クリックで最小化/最大化',
    'ko': 'Blue Marble 아이콘 - 클릭하여 최소화/최대화',
    'es': 'Icono de Blue Marble - Haz clic para minimizar/maximizar',
    'fr': 'Icône Blue Marble - Cliquez pour minimiser/maximiser',
    'de': 'Blue Marble Icon - Klicken zum Minimieren/Maximieren',
    'ru': 'Иконка Blue Marble - Нажмите для минимизации/максимизации',
    'pt': 'Ícone Blue Marble - Clique para minimizar/maximizar'
  },
  'tooltip.minimized': {
    'en': 'Blue Marble Icon - Minimized (Click to maximize)',
    'zh-cn': 'Blue Marble 图标 - 已最小化（点击最大化）',
    'zh-tw': 'Blue Marble 圖示 - 已最小化（點擊最大化）',
    'ja': 'Blue Marble アイコン - 最小化済み（クリックで最大化）',
    'ko': 'Blue Marble 아이콘 - 최소화됨 (클릭하여 최대화)',
    'es': 'Icono de Blue Marble - Minimizado (Haz clic para maximizar)',
    'fr': 'Icône Blue Marble - Minimisé (Cliquez pour maximiser)',
    'de': 'Blue Marble Icon - Minimiert (Klicken zum Maximieren)',
    'ru': 'Иконка Blue Marble - Минимизирована (Нажмите для максимизации)',
    'pt': 'Ícone Blue Marble - Minimizado (Clique para maximizar)'
  },
  'tooltip.maximized': {
    'en': 'Blue Marble Icon - Maximized (Click to minimize)',
    'zh-cn': 'Blue Marble 图标 - 已最大化（点击最小化）',
    'zh-tw': 'Blue Marble 圖示 - 已最大化（點擊最小化）',
    'ja': 'Blue Marble アイコン - 最大化済み（クリックで最小化）',
    'ko': 'Blue Marble 아이콘 - 최대화됨 (클릭하여 최소화)',
    'es': 'Icono de Blue Marble - Maximizado (Haz clic para minimizar)',
    'fr': 'Icône Blue Marble - Maximisé (Cliquez pour minimiser)',
    'de': 'Blue Marble Icon - Maximiert (Klicken zum Minimieren)',
    'ru': 'Иконка Blue Marble - Максимизирована (Нажмите для минимизации)',
    'pt': 'Ícone Blue Marble - Maximizado (Clique para minimizar)'
  },
  'tooltip.template_color_converter': {
    'en': 'Template Color Converter',
    'zh-cn': '模板颜色转换器',
    'zh-tw': '模板顏色轉換器',
    'ja': 'テンプレートカラーコンバーター',
    'ko': '템플릿 색상 변환기',
    'es': 'Convertidor de Colores de Plantilla',
    'fr': 'Convertisseur de Couleurs de Modèle',
    'de': 'Vorlagen-Farbkonverter',
    'ru': 'Конвертер Цветов Шаблона',
    'pt': 'Conversor de Cores de Modelo'
  },
  'tooltip.official_website': {
    'en': 'Official Blue Marble Website',
    'zh-cn': 'Blue Marble 官方网站',
    'zh-tw': 'Blue Marble 官方網站',
    'ja': 'Blue Marble 公式ウェブサイト',
    'ko': '공식 Blue Marble 웹사이트',
    'es': 'Sitio Web Oficial de Blue Marble',
    'fr': 'Site Web Officiel de Blue Marble',
    'de': 'Offizielle Blue Marble Website',
    'ru': 'Официальный сайт Blue Marble',
    'pt': 'Site Oficial do Blue Marble'
  },

  // Color names (for display purposes)
  'color.other': {
    'en': 'Other',
    'zh-cn': '其他',
    'zh-tw': '其他',
    'ja': 'その他',
    'ko': '기타',
    'es': 'Otro',
    'fr': 'Autre',
    'de': 'Andere',
    'ru': 'Другое',
    'pt': 'Outro'
  },
  'color.transparent': {
    'en': 'Transparent',
    'zh-cn': '透明',
    'zh-tw': '透明',
    'ja': '透明',
    'ko': '투명',
    'es': 'Transparente',
    'fr': 'Transparent',
    'de': 'Transparent',
    'ru': 'Прозрачный',
    'pt': 'Transparente'
  },

  // Language selector
  'ui.language': {
    'en': 'Language:',
    'zh-cn': '语言：',
    'zh-tw': '語言：',
    'ja': '言語：',
    'ko': '언어:',
    'es': 'Idioma:',
    'fr': 'Langue:',
    'de': 'Sprache:',
    'ru': 'Язык:',
    'pt': 'Idioma:'
  },

  // Language names (displayed in their own language)
  'lang.en': {
    'en': 'English',
    'zh-cn': 'English',
    'zh-tw': 'English',
    'ja': 'English',
    'ko': 'English',
    'es': 'English',
    'fr': 'English',
    'de': 'English',
    'ru': 'English',
    'pt': 'English'
  },
  'lang.zh-cn': {
    'en': '简体中文',
    'zh-cn': '简体中文',
    'zh-tw': '简体中文',
    'ja': '简体中文',
    'ko': '简体中文',
    'es': '简体中文',
    'fr': '简体中文',
    'de': '简体中文',
    'ru': '简体中文',
    'pt': '简体中文'
  },
  'lang.zh-tw': {
    'en': '繁體中文',
    'zh-cn': '繁體中文',
    'zh-tw': '繁體中文',
    'ja': '繁體中文',
    'ko': '繁體中文',
    'es': '繁體中文',
    'fr': '繁體中文',
    'de': '繁體中文',
    'ru': '繁體中文',
    'pt': '繁體中文'
  },
  'lang.ja': {
    'en': '日本語',
    'zh-cn': '日本語',
    'zh-tw': '日本語',
    'ja': '日本語',
    'ko': '日本語',
    'es': '日本語',
    'fr': '日本語',
    'de': '日本語',
    'ru': '日本語',
    'pt': '日本語'
  },
  'lang.ko': {
    'en': '한국어',
    'zh-cn': '한국어',
    'zh-tw': '한국어',
    'ja': '한국어',
    'ko': '한국어',
    'es': '한국어',
    'fr': '한국어',
    'de': '한국어',
    'ru': '한국어',
    'pt': '한국어'
  },
  'lang.es': {
    'en': 'Español',
    'zh-cn': 'Español',
    'zh-tw': 'Español',
    'ja': 'Español',
    'ko': 'Español',
    'es': 'Español',
    'fr': 'Español',
    'de': 'Español',
    'ru': 'Español',
    'pt': 'Español'
  },
  'lang.fr': {
    'en': 'Français',
    'zh-cn': 'Français',
    'zh-tw': 'Français',
    'ja': 'Français',
    'ko': 'Français',
    'es': 'Français',
    'fr': 'Français',
    'de': 'Français',
    'ru': 'Français',
    'pt': 'Français'
  },
  'lang.de': {
    'en': 'Deutsch',
    'zh-cn': 'Deutsch',
    'zh-tw': 'Deutsch',
    'ja': 'Deutsch',
    'ko': 'Deutsch',
    'es': 'Deutsch',
    'fr': 'Deutsch',
    'de': 'Deutsch',
    'ru': 'Deutsch',
    'pt': 'Deutsch'
  },
  'lang.ru': {
    'en': 'Русский',
    'zh-cn': 'Русский',
    'zh-tw': 'Русский',
    'ja': 'Русский',
    'ko': 'Русский',
    'es': 'Русский',
    'fr': 'Русский',
    'de': 'Русский',
    'ru': 'Русский',
    'pt': 'Русский'
  },
  'lang.pt': {
    'en': 'Português',
    'zh-cn': 'Português',
    'zh-tw': 'Português',
    'ja': 'Português',
    'ko': 'Português',
    'es': 'Português',
    'fr': 'Português',
    'de': 'Português',
    'ru': 'Português',
    'pt': 'Português'
  },

  // Console messages
  'console.userscript_loaded': {
    'en': '({version}) userscript has loaded!',
    'zh-cn': '({version}) 用户脚本已加载！',
    'zh-tw': '({version}) 使用者腳本已載入！',
    'ja': '({version}) ユーザースクリプトが読み込まれました！',
    'ko': '({version}) 사용자 스크립트가 로드되었습니다!',
    'es': '¡El userscript ({version}) se ha cargado!',
    'fr': 'Le userscript ({version}) s\'est chargé !',
    'de': 'Userscript ({version}) wurde geladen!',
    'ru': 'Пользовательский скрипт ({version}) загружен!',
    'pt': 'O userscript ({version}) foi carregado!'
  }
};

/**
 * Current language setting
 * @type {string}
 */
let currentLanguage = 'en';

/**
 * Detect the user's preferred language
 * @returns {string} Language code (e.g., 'en', 'zh-cn', 'ja')
 */
function detectLanguage() {
  // First check if there's a saved language preference
  try {
    const userSettings = JSON.parse(GM_getValue('bmUserSettings', '{}'));
    if (userSettings.language && Object.keys(translations).some(key => 
      translations[key][userSettings.language])) {
      return userSettings.language;
    }
  } catch (_) {}

  // Get browser language
  const browserLang = navigator.language || navigator.userLanguage || 'en';
  const langCode = browserLang.toLowerCase();

  // Handle Chinese language variants
  if (langCode.includes('zh')) {
    if (langCode.includes('tw') || langCode.includes('hk') || langCode.includes('mo')) {
      return 'zh-tw';
    } else {
      return 'zh-cn';
    }
  }

  // Handle other languages
  const supportedLanguages = ['en', 'ja', 'ko', 'es', 'fr', 'de', 'ru', 'pt'];
  for (const lang of supportedLanguages) {
    if (langCode.startsWith(lang)) {
      return lang;
    }
  }

  // Default to English if no match found
  return 'en';
}

/**
 * Set the current language
 * @param {string} lang - Language code
 */
function setLanguage(lang) {
  if (Object.keys(translations).some(key => translations[key][lang])) {
    currentLanguage = lang;
    
    // Save the language preference
    try {
      const userSettings = JSON.parse(GM_getValue('bmUserSettings', '{}'));
      userSettings.language = lang;
      GM.setValue('bmUserSettings', JSON.stringify(userSettings));
    } catch (_) {}
  }
}

/**
 * Get the current language
 * @returns {string} Current language code
 */
function getCurrentLanguage() {
  return currentLanguage;
}

/**
 * Translate a key to the current language
 * @param {string} key - Translation key
 * @param {Object} params - Parameters for string interpolation
 * @returns {string} Translated string
 */
function t(key, params = {}) {
  const translation = translations[key];
  
  if (!translation) {
    // For development: warn about missing translations
    if (typeof console !== 'undefined' && console.warn) {
      console.warn(`Translation key not found: ${key}`);
    }
    // Return the key itself as fallback
    return key;
  }

  // Try current language first, then English, then first available language
  let text = translation[currentLanguage] || 
             translation['en'] || 
             Object.values(translation)[0] || 
             key;

  // Handle string interpolation
  if (params && typeof params === 'object') {
    Object.keys(params).forEach(param => {
      const placeholder = `{${param}}`;
      text = text.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), params[param]);
    });
  }

  return text;
}

/**
 * Check if a translation exists for a key
 * @param {string} key - Translation key
 * @returns {boolean} True if translation exists
 */
function hasTranslation(key) {
  return translations[key] !== undefined;
}

/**
 * Get all available languages
 * @returns {Array<string>} Array of language codes
 */
function getAvailableLanguages() {
  const languages = new Set();
  Object.values(translations).forEach(translation => {
    Object.keys(translation).forEach(lang => languages.add(lang));
  });
  return Array.from(languages).sort();
}

/**
 * Get translation statistics for a specific language
 * @param {string} lang - Language code
 * @returns {Object} Statistics object with coverage information
 */
function getTranslationStats(lang) {
  const totalKeys = Object.keys(translations).length;
  let translatedKeys = 0;
  let missingKeys = [];

  Object.keys(translations).forEach(key => {
    if (translations[key][lang]) {
      translatedKeys++;
    } else {
      missingKeys.push(key);
    }
  });

  return {
    language: lang,
    totalKeys,
    translatedKeys,
    missingKeys,
    coverage: Math.round((translatedKeys / totalKeys) * 100)
  };
}

/**
 * Debug function to check translation coverage for all languages
 * @returns {Object} Coverage report for all languages
 */
function getTranslationCoverage() {
  const languages = getAvailableLanguages();
  const report = {};

  languages.forEach(lang => {
    report[lang] = getTranslationStats(lang);
  });

  return report;
}

// Initialize language on load
currentLanguage = detectLanguage();

// Export functions for use in other modules
export {
  t,
  setLanguage,
  getCurrentLanguage,
  detectLanguage,
  hasTranslation,
  getAvailableLanguages,
  getTranslationStats,
  getTranslationCoverage
};

export default {
  t,
  setLanguage,
  getCurrentLanguage,
  detectLanguage,
  hasTranslation,
  getAvailableLanguages,
  getTranslationStats,
  getTranslationCoverage
};

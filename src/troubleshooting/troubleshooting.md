# Общее устранение неполадок

* Поддерживаемая версия: 0.6.8

Этот раздел для тех, у кого есть проблемы с загрузкой OpenCore, macOS или проблемы внутри macOS. Если вы не знаете, где именно вы застряли в процессе загрузки macOS, прочтение страницы [Процесс загрузки macOS](../troubleshooting/boot.md) может помочь прояснить ситуацию.

**И, если ваша проблема не рассмотрена здесь, пожалуйста, прочтите официальную документацию OpenCore: [Configuration.pdf](https://github.com/acidanthera/OpenCorePkg/blob/master/Docs/Configuration.pdf)**. Эта документация содержит гораздо больше технической информации о том, как OpenCore работает, и имеет более подробную информацию о всех поддерживаемых квирках.

## Содержание

Если вы не уверены, где вы застряли, см. здесь: [Понимание процесса загрузки macOS](../troubleshooting/boot.md)

* [Проблемы с загрузкой OpenCore](./extended/opencore-issues.md)
  * Этот раздел относится к загрузке USB и доступу к меню выбора OpenCore. Все, что после меню выбора, к примеру загрузка macOS, смотрите ниже
* [Проблемы с Kernelspace](./extended/kernel-issues.md)
  * Охватывает все проблемы, которые часто происходят на ранней загрузке, с момента выбора macOS в меню OpenCore и до момента появления логотипа Apple с загрузкой графического интерфейса установщика
* [Проблемы с Userspace](./extended/userspace-issues.md)
  * Охватывает проблемы возникающие с момента загрузки графического интерфейса macOS до установки macOS на диск
* [Послеустановочные проблемы](./extended/post-issues.md)
  * Охватывает проблемы после установки и полной загрузки macOS
* [Прочие проблемы](./extended/misc-issues.md)
  * Охватывает проблемы после установки macOS или с другими ОС

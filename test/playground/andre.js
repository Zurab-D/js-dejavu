/*jslint browser:true, devel:true, nomen:true, sloppy: true*/
/*global define*/

/**
 * Module/Class description.
 *
 * @author André Cruz <andremiguelcruz@msn.com>
 */
define(['dejavu/Class', './marcelo'], function (Class, Marcelo) {

    var SomeModule = {

        marcelo: null,
        _test: 2,

        initialize: function () {
            this.marcelo = new Marcelo();
        },

        run: function () {
            console.log("andre run", this._test);
            this.marcelo.run();
        }
    };

    return new Class(SomeModule);
});
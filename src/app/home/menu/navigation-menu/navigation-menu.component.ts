import { Router } from '@angular/router';

import { Component, ElementRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { MenuInterface } from './navigation-menu.interface';

@Component({
    selector: 'app-navigation-menu',
    templateUrl: './navigation-menu.component.html',
    styleUrls: ['./navigation-menu.component.scss']
})

export class NavigationMenuComponent {

    datos!: MenuInterface;

    private _jsonURL = '../../../assets/data/menu.json';

    constructor(private http: HttpClient, private router: Router) {
        
        this.getJSON().subscribe(data => {
            this.datos = data;
        });
        
    }

    get Data(): MenuInterface {
        return this.datos;
    }

    public getJSON(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

    mostrarPagina(ruta: string) {

        this.router.navigate([ruta]);

    }



    // @ViewChild("myNameElem") myNameElem: ElementRef;

//     $linea = elementref
// $navListItem = $('.nav-li')
// $activeWidth = $('.active-nav').width()
// $firstChild = $('.nav-li:first-child')
// $defaultMarginLeft = parseInt($('.nav-li:first-child').next().css('marginLeft').replace(/\D/g, ''))
// $defaultPaddingLeft = parseInt($('#nav-container > ul').css('padding-left').replace(/\D/g, ''))

// $line.width($activeWidth + 'px')
// $line.css('marginLeft', $defaultPaddingLeft + 'px')

// $navListItem.click ->
// 	$this = $(this)
// 	$activeNav = $('.active-nav')
// 	$currentWidth = $activeNav.width()
// 	$currentOffset = $activeNav.position().left
// 	$currentIndex = $activeNav.index()
// 	$activeNav.removeClass('active-nav')
// 	$this.addClass('active-nav')

// 	if $this.is($activeNav)
// 		return 0;

// 	else 
// 		if $this.index() > $currentIndex
// 			if $activeNav.is($firstChild)
// 				$initWidth = $defaultMarginLeft + $this.width() + $this.position().left - $defaultPaddingLeft
// 			else
// 				$initWidth = $this.position().left + $this.width() - $currentOffset

// 			$marginLeftToSet = $this.position().left + $defaultMarginLeft + 'px'

// 			$line.width($initWidth + 'px')
// 			setTimeout( ->
// 				$line.css('marginLeft', $marginLeftToSet)
// 				$line.width($this.width() + 'px')
// 			, 175)

// 		else
// 			if $this.is($firstChild)
// 				$initWidth = $currentOffset - $defaultPaddingLeft + $defaultMarginLeft + $currentWidth
// 				$marginLeftToSet = $this.position().left
// 			else
// 				$initWidth = $currentWidth + $currentOffset - $this.position().left
// 				$marginLeftToSet = $this.position().left + $defaultMarginLeft

// 			$line.css('marginLeft', $marginLeftToSet)
// 			$line.width($initWidth + 'px')
// 			setTimeout( ->
// 				$line.width($this.width() + 'px')
// 			, 175)




}
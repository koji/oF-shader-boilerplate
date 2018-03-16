#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){
    
    // framerate
    ofSetFrameRate(60);
    
    gui.setup();
    gui.add(u_slider1.setup("u_slider1", 0.5, -1.0, 1.0));
    gui.add(u_slider2.setup("u_slider2", 0.5, -1.0, 1.0));
    gui.add(u_slider3.setup("u_slider3", 0.5, -1.0, 1.0));
    gui.add(u_slider4.setup("u_slider4", 0.5, 0.1, 50.0));
    

}

//--------------------------------------------------------------
void ofApp::update(){

}

//--------------------------------------------------------------
void ofApp::draw(){
    // shader's file name
    shader.load("test");
    shader.begin();
    shader.setUniform1f("u_time", ofGetElapsedTimef());
    shader.setUniform2f("u_resolution", ofGetWidth(), ofGetHeight());
    shader.setUniform1f("u_slider1", u_slider1); // for slider 1
    shader.setUniform1f("u_slider2", u_slider2); // for slider 2
    shader.setUniform1f("u_slider3", u_slider3); // for slider 3
    shader.setUniform1f("u_slider4", u_slider4); // for slider 4
    ofDrawRectangle(0,0, ofGetWidth(), ofGetHeight());
    shader.end();
    gui.draw();

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){ 

}
